const express = require('express');
const router = express.Router();
const app = require('../app');
const UserData = require('../models/db-models');

//Test the routes
router.get('/test', (req, res, next) => {
    res.send('Hello I am a user');
});

//GET all available Users
router.get('/', function(req, res, next) {
    UserData.find(function(err, users){
        res.send(users);
        console.log('All Users were listed');
    });
})

//Search for User by userID
router.get('/:userID', function(req, res, next){
    UserData.find({_id: req.params.userID}, function(err, users){
        res.send(users);
        console.log('User '+ req.params.userID + ' found and listed');
    });
})

//Create new User
router.post('/', function(req, res, next){

    var newUser = {
        name: req.body.name,
        roles: req.body.roles,
        description: req.body.description
    }

    UserData.create(newUser, function (err, user){
        if (err) {
            return next(err)
          } else {
            console.log('Data saved!');

          }
    })
    res.json(201, newUser);
    console.log('New User created');
})

//Change existing user
router.put('/:userID', function(req, res, next){
    console.log('User '+ req.params.userID + ' was changed');
})

//Delete existing user
router.delete('/:userID', function( req, res, next){
    console.log('User '+ req.params.userID + ' was deleted');
    res.send('User '+ req.params.userID + ' was deleted');
})

module.exports = router;