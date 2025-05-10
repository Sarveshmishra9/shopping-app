const mongoose = require("mongoose");

const refreshTokenSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  refreshToken: {
    type: String,
    required: true,
  },
});

const RefreshTokenModel = mongoose.model("RefreshToken", refreshTokenSchema);

module.exports = RefreshTokenModel;
