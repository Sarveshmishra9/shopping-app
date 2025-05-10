const jwt = require("jsonwebtoken");
const ExpressError = require("../utils/express-error");
const refreshTokenMiddleware = require("./refreshTokenMiddleware");

const authMiddleware = (req, res, next) => {
  const accessToken = req.cookies.accessToken;
  console.log("the accessToken got from the request is", accessToken);

  if (!accessToken) {
    next(new ExpressError(401, "Access token is missing"));
  }

  try {
    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    console.log("Decoded Access Token:", decoded);
  } catch (error) {
    if (error.name !== "TokenExpiredError") {
      next(new ExpressError(401, "Invalid access token"));
    } else {
      //refresh the token and set the new access token in the cookie
      req.user = decoded; // Attach user info to request
      console.log("Token expired, refreshing token");
      return refreshTokenMiddleware(req, res, next);
    }
  }

  // Attach user info to request
  req.user = decoded;
  next();
};

module.exports = authMiddleware;
