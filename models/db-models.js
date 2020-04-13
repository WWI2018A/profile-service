//connect to MongoDB
const mongoose = require('mongoose');

//Create Schema
const ProfileDataSchema = new mongoose.Schema({
  uid: String,
  name: String,
  prename: String,
  roles: String,
  company: String,
  description: String,
  quote: String,
  
  skills: [],
  skills_icons: [],
  
  os_icons: [],
  os: [],

  social: [],
  social_icons: [],
  
  profilePicture: {
    type: String,
    required: true,
    default: 'https://res.cloudinary.com/thewebsitemediacloud/image/upload/v1585643114/ProfileService/lbjytgmsbisjfjfmcya4.png'
  },
  profileWallpaper: {
    type: String,
    requires: true,
    default: 'https://res.cloudinary.com/thewebsitemediacloud/image/upload/v1585643114/ProfileService/lbjytgmsbisjfjfmcya4.png'
  },
  
}, {
  versionKey: false // No automatic version key will be generated
});


//Create model of Schema
var ProfileData = mongoose.model('UserData', ProfileDataSchema, 'profile_service_profiles');
module.exports = ProfileData;