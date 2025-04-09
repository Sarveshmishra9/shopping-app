import mongoose from "mongoose";

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

  timestamps: true,
});

//exporting
module.exports = mongoose.model("User", userSchema);