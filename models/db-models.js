//connect to MongoDB
const mongoose = require('mongoose');

//Create Schema
const ProfileDataSchema = new mongoose.Schema({
  user_id: String,
  name: String,
  prename: String,
  roles: String,
  description: String
}, {
  versionKey: false // No automatic version key will be generated
});

//Create model of Schema
var ProfileData = mongoose.model('UserData', ProfileDataSchema);
module.exports = ProfileData;