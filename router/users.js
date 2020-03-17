const express = require('express');
const router = express.Router();
const app = require('../app');
const ProfileData = require('../models/db-models');

//Test the routes
router.get('/test', (req, res, next) => {
    res.send('Hello I am a user');
});

//GET all available Users
router.get('/', function(req, res, next) {
    ProfileData.find(function(err, profiles){
        res.send(profiles);
        console.log('All profiles were listed');
    });
})

//Search for User by userID
router.get('/:uid', function(req, res, next){
    ProfileData.find({user_id: req.params.uid}, function(err, profiles){
        if (err) {
            res.send('No user data found');
            return next(err)
          } else {
            res.send(profiles);
            console.log('Data of user '+ req.params.uid + ' found and listed');
          }
        
    });
})

//Create new User
router.post('/', function(req, res, next){

    var newProfile = {
        user_id: req.body.user_id,
        name: req.body.name,
        prename: req.body.prename,
        roles: req.body.roles,
        description: req.body.description
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
router.put('/:uid', function(req, res, next){
    ProfileData.findOneAndUpdate({user_id: req.params.uid}, req.body, {new: true}, function(err, profiles){
        if (err) {
            res.send('no user data found');
            return next(err)
          } else {
            console.log('data of user '+ req.params.uid + ' was changed');
            res.send('data of user '+ req.params.uid + ' was changed');
          }
    })
})

//Delete existing user
router.delete('/:uid', function( req, res, next){
    ProfileData.findOneAndDelete({user_id: req.params.uid}, function(err, profiles){
        if (err) {
            res.send('no users found');
            return next(err)
          } else {
            console.log('data of user '+ req.params.uid + ' was deleted');
            res.send('data of user '+ req.params.uid + ' was deleted');
          }
        })
})

module.exports = router;