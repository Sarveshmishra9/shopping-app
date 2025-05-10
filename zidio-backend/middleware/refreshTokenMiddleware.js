const refreshTokenModel = require("../models/RefreshToken");
const jwt = require("jsonwebtoken");
const generateAccessToken = require("../utils/TokenUtils").generateAccessToken;

const refreshTokenMiddleware = (req, res, next) => {
  const user = req.user;
  const refreshTokenResult = refreshTokenModel.findOne({ userId: user.id });

  try {
    const refreshTokenPayload = jwt.decode(refreshTokenResult.refreshToken);
    const accessToken = generateAccessToken(user);
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
      maxAge: 15 * 60 * 1000, // 15 minutes
    });
    console.log("Access Token refreshed");
    console.log("Access token:", accessToken);
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      console.log("Refresh token expired");
      next(new ExpressError(403, "Refresh token expired"));
    }
  }

  // set the user
  req.user = user;
  next();
};

module.exports = refreshTokenMiddleware;
