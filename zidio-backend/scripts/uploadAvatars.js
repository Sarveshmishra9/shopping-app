const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") }); // load env FIRST
const cloudinary = require("cloudinary").v2; // import AFTER dotenv

// ✅ Ensure credentials are loaded
if (
  !process.env.cloud_Name ||
  !process.env.cloud_API_KEY ||
  !process.env.cloud_API_SECRET
) {
  throw new Error("Missing Cloudinary credentials in .env");
}

// ✅ Now initialize Cloudinary config
cloudinary.config({
  cloud_name: process.env.cloud_Name,
  api_key: process.env.cloud_API_KEY,
  api_secret: process.env.cloud_API_SECRET,
});

console.log("✅ Cloudinary initialized with config:", cloudinary.config());

const avatarFolder = path.join(__dirname, "../avatars");
const avatarUrls = [];

(async () => {
  try {
    const files = fs.readdirSync(avatarFolder);

    for (const file of files) {
      const filePath = path.join(avatarFolder, file);
      console.log(`Uploading: ${filePath}`);

      const result = await cloudinary.uploader.upload(filePath, {
        folder: "starry-avatars",
        resource_type: "image",
      });

      avatarUrls.push(result.secure_url);
      console.log(`✅ Uploaded ${file}: ${result.secure_url}`);
    }

    // Optionally save the results
    fs.writeFileSync(
      path.join(__dirname, "../data/avatarUrls.json"),
      JSON.stringify(avatarUrls, null, 2)
    );
    console.log("✨ All uploads complete!");

  } catch (err) {
    console.error("❌ Upload failed:", err.message);
  }
})();
