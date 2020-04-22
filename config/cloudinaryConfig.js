// Requirements
const cloudinary = require("cloudinary");

// Environmental variables
const dotenv = require('dotenv').config();

// -- Configure cloudinary. ----------------------------------
cloudinary.config ({
    
    cloud_name: "thewebsitemediacloud",//process.env.CLOUDINARY_CLOUD_NAME,
    api_key: 997566815525513,//process.env.CLOUDINARY_API_KEY,
    api_secret: "7Ao-q3gVUlvGKcwAuUGwMO8lqX4"//process.env.CLOUDINARY_API_SECRET
});