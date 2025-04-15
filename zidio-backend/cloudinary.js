const cloudinary = require("cloudinary").v2;
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.cloud_Name,
  cloud_api: process.env.cloud_API_KEY,
  cloud_api_secret: process.cloud_API_SECRET,
});

module.exports = {cloudinary};