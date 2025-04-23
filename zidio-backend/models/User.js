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
  
  isAdmin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId, ref: "User",
      ref:"Review"
    },
  ],

  // timestamps: true,
});

//exporting
module.exports = mongoose.model("User", userSchema);
