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
router.get('/uid/:userID', function(req, res, next){
    UserData.find({_id: req.params.userID}, function(err, users){
        if (err) {
            res.send('No Users found');
            return next(err)
          } else {
            res.send(users);
            console.log('User '+ req.params.userID + ' found and listed');
          }
        
    });
})

//Search for User by userID
router.get('/name/:name', function(req, res, next){
    UserData.find({name: req.params.name}, function(err, users){
        if (err) {
            res.send('No Users found');
            return next(err)
          } else {
            res.send(users);
            console.log('User '+ req.params.name + ' found and listed');
          }
        
    });
})

//Create new User
router.post('/uid/', function(req, res, next){

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
            res.json(201, newUser);
          }
    })
})

//Change existing user
router.put('/uid/:userID', function(req, res, next){
    UserData.findOneAndUpdate({_id: req.params.userID}, req.body, {new: true}, function(err, users){
        if (err) {
            res.send('No Users found');
            return next(err)
          } else {
            console.log('User '+ req.params.userID + ' was changed');
            res.send('User '+ req.params.userID + ' was changed');
          }
    })
})

//Delete existing user
router.delete('/uid/:userID', function( req, res, next){
    UserData.findOneAndDelete({_id: req.params.userID}, function(err, users){
        if (err) {
            res.send('No Users found');
            return next(err)
          } else {
            console.log('User '+ req.params.userID + ' was deleted');
            res.send('User '+ req.params.userID + ' was deleted');
          }
        })
})

module.exports = router;