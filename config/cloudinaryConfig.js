// Requirements
const cloudinary = require("cloudinary");

// Environmental variables
const dotenv = require('dotenv').config();

// -- Configure cloudinary. ----------------------------------
cloudinary.config ({
    
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});