const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const generateAccessToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      isAdmin: user.isAdmin,
      firstName: user.firstName,
      lastName: user.lastName,
      avatarUrl: user.avatarUrl,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" }, // short lived
  );
  //   jwt.sign() creates a token using the user's ID and your secret key.
};

// Generate Refresh Token
const generateRefreshToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, isAdmin: user.isAdmin },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" }, // long lived
  );
};

module.exports = { generateAccessToken, generateRefreshToken };
