const mongoose = require("mongoose");
// const bcrypt = require('bcryptjs');

//schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false, // <--- Important for security (prevents it from being returned by default)
  },
  avatarUrl: { type: String, default: "" }, // Store avatar URL

  

  // timestamps: true,
});

//exporting
module.exports = mongoose.model("User", userSchema);
