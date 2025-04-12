const mongoose = require("mongoose");
// const bcrypt = require('bcryptjs');

//schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  isAdmin: {
    type: Boolean,
    default: false, //admin role
  },
  address: {
    type: String,
  },

  // timestamps: true,
});

//exporting
module.exports = mongoose.model("User", userSchema);