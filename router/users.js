const express = require('express');
const router = express.Router();
const app = require('../app');
const ProfileData = require('../models/db-models');
const upload = require('../config/multerConfig');
const cloudinary = require('cloudinary')
require('../config/cloudinaryConfig');

// -------------------------------------------

//GET User:
// - Check if Header uID exists
// - if yes find and list user by user-id
// - else list all users
router.get('/', function(req, res, next){
    console.log(req.header)
    console.log("GET Request erhalten")

    var headerExists = req.header('x-uid');
    
    if(headerExists !== undefined) {
    ProfileData.find({uid: req.header('x-uid')}, function(err, profiles){
        if (err) {
            res.json(500, "Internal Error");
            throw err;
            return next(err);
          } else {
              if(profiles.length > 0){
                res.json(200, profiles);  
                console.log('Data of user '+ req.header('x-uid') + ' found and listed');
              }else {
                res.json(404, "No matching Profile found");
              }
          } 
    });
    }
    else {
        ProfileData.find(function(err, profiles){
            if(err){
                res.json(404, 'Database is empty')
                throw err;
                return next(err);
            }else {
            res.json(200, profiles);
            console.log('All profiles were listed'); 
            }
    })
}
})

//Create new User
router.post('/', function(req, res, next){

    var newProfile = {
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

    ProfileData.create(newProfile, function (err, profile){
        if (err) {
            return next(err)
          } else {
            console.log('user data saved!');
            res.json(201, newProfile);
          }
    })
})


//Delete existing user
router.delete('/', function( req, res, next){
    var headerExists = req.header('x-uid');
    
    if(headerExists !== undefined) {
    ProfileData.findOneAndDelete({uid: req.header('x-uid')}, function(err, profiles){
        if (err) {
            res.send('no users found');
            return next(err)
          } else {
            console.log('data of user '+ req.header('x-uid') + ' was deleted');
            res.send('data of user '+ req.header('x-uid') + ' was deleted');
          }
        })
    } else {
        res.send("Please specify a User-ID")
    }
})


router.get('/testpage', (req, res, next) => {

    res.render('profile.html');
});




//POST Request for adding a new ProfilePicture.
router.post('/imageupload/profilepicture', upload.single('file-input'), (req, res, next) => {
    
    // User did not input any Picture
    if(req.file === undefined) {
        var err = new Error("Profile-Picture missing in Request.");
        res.json(400, err.message);
    }

    else {
        var fileTypeIsValid = checkFileType({req});
    }

    switch(fileTypeIsValid) {

        // Valid file type, continue to users/profile/picture.
        case true:
            next();
            break;

        // Wrong format, display error.
        case false:
            var err = new Error("You may only select .jpeg, .jpg, or .png files.")
            res.json(400, err);
    }


}, async (req, res, next) => {

    const result = await cloudinary.v2.uploader.upload(req.file.path, {

        secure: true,
        folder: "ProfileService",
        transformation: [{width: 300, height: 300, crop: "fit"}]
    })

    // This is the location of the uploaded Picture.
    res.json(201, result.secure_url);
});


//POST Request for adding a new Wallpaper.
router.post('/imageupload/wallpaper', upload.single('file-input'), (req, res, next) => {
    
    // User did not input any Picture
    if(req.file === undefined) {
        var err = new Error("Wallpaper missing in Request");
        res.json(400, err.message);
    }

    else {
        var fileTypeIsValid = checkFileType({req});
    }

    switch(fileTypeIsValid) {

        // Valid file type, continue to users/profile/picture.
        case true:
            next();
            break;

        // Wrong format, display error.
        case false:
            var err = new Error("You may only select .jpeg, .jpg, or .png files.")
            res.json(400, err);
    }


}, async (req, res, next) => {

    const result = await cloudinary.v2.uploader.upload(req.file.path, {

        secure: true,
        folder: "ProfileService",
        transformation: [{width: 1920, height: 1080, crop: "fit"}]
    })

    // This is the location of the uploaded Picture.
    res.json(201, result.secure_url);
});





// --- Functions -----------------------------------------------------
function checkFileType({req}) {

    // Check if the filetype is valid
    var validFileTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    var fileType = req.file.mimetype;

    console.log('fileType', fileType);

    // Compare fileType with the valid file types.
    for (var i=0; i<validFileTypes.length; i++) {

        if(fileType !== undefined) {

            if(fileType.toString() === validFileTypes[i]) return true;
        }
    }

    return false;
}



router.put('/', function(req, res, next){
    
    ProfileData.findOneAndUpdate({uid: req.body.uid}, req.body, {new: true}, function(err, profiles){
        if (err) {
            console.log('Put did not work');
            return next(err)
          } else {
            console.log('data of user '+ req.body.uid + ' was changed');
            res.json(200, "Success");
          }
    })
})


// Export
module.exports = router;