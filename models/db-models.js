//connect to MongoDB
const mongoose = require('mongoose');

//Create Schema
const UserDataSchema = new mongoose.Schema({
  name: String,
  roles: String,
  description: String
});

//Create model of Schema
var UserData = mongoose.model('UserData', UserDataSchema);
module.exports = UserData;