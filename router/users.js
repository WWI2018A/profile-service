const express = require('express');
const router = express.Router();
const app = require('../app');
const ProfileData = require('../models/db-models');
const upload = require('../config/multerConfig');
const cloudinary = require('cloudinary')
require('../config/cloudinaryConfig');



// --- Endpoints -------------------------------------------

//Get Profile of a User:
// - Check if Header x-uid exists
// - if no: list all profiles
// - if yes: check if a matching user was found
// - if no: response to client: 404, nothing found
// - if yes: list the found profile
router.get('/', function (req, res, next) {
    console.log("GET Request erhalten")

    var headerExists = req.header('x-uid');

    if (headerExists !== undefined) {
        ProfileData.find({ uid: req.header('x-uid') }, function (err, profiles) {
            if (err) {
                res.status(500).json("ERROR at GET Request: Finding Profile failed")
                throw err;
                return next(err);
            } else {
                if (profiles.length > 0) {
                    res.status(200).json(profiles);
                    console.log('Data of user ' + req.header('x-uid') + ' found');
                } else {
                    res.status(404).json("ERROR at GET Request: No matching Profile found")
                }
            }
        });
    }
    else {
        ProfileData.find(function (err, profiles) {
            if (err) {
                res.status(404).json("ERROR at GET Request: Listing all Profiles failed")
                throw err;
                return next(err);
            } else {
                res.status(200).json(profiles)
                console.log('All profiles were listed');
            }
        })
    }
})

//Create new User:
// - Extract the new Profile from the req.body and req.header
// - Check for Header existence
// - Check if there is a matching Profile already existing
// - if yes: 400, response to client
// - if not: Add new Profile to db
router.post('/', function (req, res, next) {

    var newProfile = { //Define what will be included in Database
        uid: req.header('x-uid'),
        quote: req.body.quote,
        name: req.body.name,
        prename: req.body.prename,
        roles: req.body.roles,
        description: req.body.description,
        skills: req.body.skills,
        skills_icons: req.body.skills_icons,
        company: req.body.company,
        os: req.body.os,
        os_icons: req.body.os_icons,
        social: req.body.social,
        social_icons: req.body.social_icons,
        profilePicture: req.body.profilePicture,
        profileWallpaper: req.body.profileWallpaper
    }

    var headerExists = req.header('x-uid');
    if (headerExists !== undefined) {

        ProfileData.find({ uid: req.header('x-uid') }, function (err, profiles) { //Check if requested User is already listed in Database
            if (err) {
                res.status(500).json("ERROR at POST Request: Finding Profile failed")
                throw err;
                return next(err);
            } else {
                if (profiles.length > 0) {
                    res.status(400).json("ERROR at POST: Profile already existing");
                } else {
                    ProfileData.create(newProfile, function (err, profile) {
                        if (err) {
                            res.status(500).json("ERROR at POST Request: Creating new User failed")
                            return next(err)
                        } else {
                            console.log('user data saved!');
                            res.status(201).json(newProfile);
                        }
                    })
                }
            }
        });
    }
    else {
        res.status(400).json("ERROR at POST Request: Please specify a User ID")
    }
})

//Updating an existing User
// - Check if Header exists
// - Check if matching Profile found
// - if no: 400, not found
// - if yes: change found Profile according to req.body
router.put('/', function (req, res, next) {

    var headerExists = req.header('x-uid');
    if (headerExists !== undefined) {

        ProfileData.findOneAndUpdate({ uid: req.header('x-uid') }, req.body, { new: true }, function (err, profiles) {
            if (err) {
                console.log('Put did not work');
                res.status(500).json("ERROR at PUT Request: Operation not successfull");
                return next(err)
            } else {
                if(profiles.length > 0) {
                    console.log('data of user ' + req.header('x-uid') + ' was changed');
                    res.status(200).json('data of user ' + req.header('x-uid') + ' was changed');
                } else {
                    res.status(400).json('ERROR at PUT Request: Profile of user ' + req.header('x-uid') + ' not found');
                }

            }
        })
    } else {
        res.status(400).json("ERROR at PUT Request: Please specify a User ID")
    }
})



//Delete existing user
// - Check if Header x-uid exists
// - Check if matching Profile found
// - if no: 400, not found
// - if yes: delete found Profile
// !! This endpoint is currently not used, no Frontend function uses this endpoint !!
router.delete('/', function (req, res, next) {

    var headerExists = req.header('x-uid');
    if (headerExists !== undefined) {

        ProfileData.findOneAndDelete({ uid: req.header('x-uid') }, function (err, profiles) {
            if (err) {
                res.status(404).json("ERROR at DELETE Request: Finding Profile failed");
                return next(err)
            } else {
                if (profiles.length > 0) {
                    console.log('data of user ' + req.header('x-uid') + ' was deleted');
                    res.status(200).json('data of user ' + req.header('x-uid') + ' was deleted')
                }
                else {
                    res.status(404).json("ERROR at DELETE Request: Profile " + req.header('x-uid') + " doesn't exist")
                }

            }
        })
    } else {
        res.status(400).json("ERROR at DELETE Request: Please specify a User-ID");
    }
})




//The following endpoints are responsible for adding the pictures to Cloudinary

//Adding a new ProfilePicture
// - Check if any file is attached at request
// - uses funtion checkFileType to verify that file is a image from allowed filetype 
// - if no: 400, no image attached
// - if yes: async call to Cloudinary -> Upload Image 
router.post('/imageupload/profilepicture', upload.single('file-input'), (req, res, next) => {

    // User did not input any Picture
    if (req.file === undefined) {
        var err = new Error("Profile-Picture missing in Request.");
        res.status(400).json(err.message);
    }

    else {
        var fileTypeIsValid = checkFileType({ req });
    }

    switch (fileTypeIsValid) {

        // Valid file type, continue to users/profile/picture.
        case true:
            next();
            break;

        // Wrong format, display error.
        case false:
            var err = new Error("You may only select .jpeg, .jpg, or .png files.")
            res.status(400).json("ERROR at POST Request: " + err);
    }


}, async (req, res, next) => {

    const result = await cloudinary.v2.uploader.upload(req.file.path, {

        secure: true,
        folder: "ProfileService",
        transformation: [{ width: 300, height: 300, crop: "fit" }] //Define size of Picture
    })

    // Cloudinary URL send to client
    res.status(201).json(result.secure_url);
});


//Adding a new Wallpaper
// - Check if any file is attached at request
// - uses funtion checkFileType to verify that file is a image from allowed filetype 
// - if no: 400, no image attached
// - if yes: async call to Cloudinary -> Upload Image 
router.post('/imageupload/wallpaper', upload.single('file-input'), (req, res, next) => {

    // User did not input any Picture
    if (req.file === undefined) {
        var err = new Error("Wallpaper missing in Request");
        res.status(400).json("ERROR at POST Request: " + err.message);
    }

    else {
        var fileTypeIsValid = checkFileType({ req });
    }

    switch (fileTypeIsValid) {

        // Valid file type, continue to users/profile/picture.
        case true:
            next();
            break;

        // Wrong format, display error.
        case false:
            var err = new Error("You may only select .jpeg, .jpg, or .png files.")
            res.status(400).json("ERROR at POST Request: " + err);
    }


}, async (req, res, next) => {

    const result = await cloudinary.v2.uploader.upload(req.file.path, {

        secure: true,
        folder: "ProfileService",
        transformation: [{ width: 1920, height: 1080, crop: "fit" }] //Define size of Picture
    })

    // This is the location of the uploaded Picture.
    res.status(201).json(result.secure_url);
});





// --- Functions -----------------------------------------------------

//This function is used by the endpoint /profilepicture and /wallpaper to validate the allowed filetype
function checkFileType({ req }) {

    // Check if the filetype is valid
    var validFileTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    var fileType = req.file.mimetype;

    console.log('fileType', fileType);

    // Compare fileType with the valid file types.
    for (var i = 0; i < validFileTypes.length; i++) {

        if (fileType !== undefined) {

            if (fileType.toString() === validFileTypes[i]) return true;
        }
    }

    return false;
}


// Export
module.exports = router;