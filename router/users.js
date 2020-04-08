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
    
    var headerExists = req.headers.x-uid;
    
    if(headerExists) {
    ProfileData.find({x_uid: req.headers.x-uid}, function(err, profiles){
        if (err) {
            res.send('No user data found');
            return next(err)
          } else {
            res.send(profiles);  
            console.log('Data of user '+ req.headers.x-uid + ' (' + profiles[0].name +', ' + profiles[0].prename + ') ' + ' found and listed');
          } 
    });
    }
    else {
        ProfileData.find(function(err, profiles){
            res.send(profiles);
            console.log('All profiles were listed'); 
    })
}
})

//Create new User
router.post('/', function(req, res, next){

    var newProfile = {
        x_uid: req.body.x-uid,
        name: req.body.name,
        prename: req.body.prename,
        roles: req.body.roles,
        description: req.body.description,
        skills: req.body.skillselect,
        company: req.body.company,
        os: req.body.os,
        socialnetworks: req.body.socialnetworks        

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

//Change existing user
router.put('/', function(req, res, next){
    
    var headerExists = req.headers.x-uid;
    
    if(headerExists) {
    ProfileData.findOneAndUpdate({x_uid: req.headers.x-uid}, req.body, {new: true}, function(err, profiles){
        if (err) {
            res.send('no user data found');
            return next(err)
          } else {
            console.log('data of user '+ req.headers.x-uid + ' (' + profiles.name +', ' + profiles.prename + ') ' + ' was changed');
            res.send('data of user '+ req.headers.x-uid + ' (' + profiles.name +', ' + profiles.prename + ') ' + ' was changed');
          }
    })
}
else {
    var err = new Error("Please specify a User-ID.");
    res.send(err.message);
    next();
}
})

//Delete existing user
router.delete('/:x-uid', function( req, res, next){
    ProfileData.findOneAndDelete({x_uid: req.params.x-uid}, function(err, profiles){
        if (err) {
            res.send('no users found');
            return next(err)
          } else {
            console.log('data of user '+ req.params.x-uid + ' was deleted');
            res.send('data of user '+ req.params.x-uid + ' was deleted');
          }
        })
})

// For testing call http://localhost:3000/api/v1/profiles/test/profile
router.get('/test/profile', (req, res, next) => {

    res.render('profile.html');
});

// Change the profile picture.
router.post('/profilePicture/change', upload.single('fileUpload'), (req, res, next) => {
    console.log(req.body)
    
    // User did not input any Picture
    if(req.file === undefined) {
        var err = new Error("Please select a picture before commiting.");
        res.send(err.message);
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
            res.send(err);
    }


}, async (req, res, next) => {

    const result = await cloudinary.v2.uploader.upload(req.file.path, {

        secure: true,
        folder: "ProfileService",
        transformation: [{width: 300, height: 300, crop: "fit"}]
    })

    // This is the location of the uploaded Picture. You just have to add it to the user database now.
    console.log(result.secure_url);
    var newProfile = {
        profileImage: result.secure_url,
        x_uid: req.body.x-uid,
        name: req.body.name,
        prename: req.body.prename,
        roles: req.body.roles,
        description: req.body.description,
        skills: req.body.skillselect,
        company: req.body.company,
        os: req.body.os,
        socialnetworks: req.body.socialnetworks 
    }

    ProfileData.create(newProfile, function (err, profile){
        if (err) {
            return next(err)
          } else {
            console.log('user data saved!');
            console.log(newProfile);
          }
    })
    var route = '/api/v1/profiles/'
    // Redirect to the same page, put this time the new profile picture has to be loaded into the html!
    res.redirect(route);
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

// Export
module.exports = router;