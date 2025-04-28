//(for Access Token)

const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const accessToken = req.cookies.accessToken;

  if (!accessToken) {
    return res.status(401).json({ message: "Access Denied. No access token provided." });
  }

  try {
    const decoded = jwt.verify(accessToken,  process.env.ACCESS_TOKEN_SECRET ); // using access_secret now
    console.log("Decoded Access Token:", decoded);

    req.user = decoded; // decoded contains id, email, isAdmin
    next();
  } catch (err) {
    console.error("Access Token verification failed:", err);
    return res.status(403).json({ message: "Invalid or expired access token" });
  }
};

module.exports = verifyToken;



