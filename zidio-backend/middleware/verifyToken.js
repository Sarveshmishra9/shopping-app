const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Access Denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, "secret123"); // use the same secret as used during token creation
    console.log("Decoded JWT:", decoded); // Make sure `isAdmin` is true
    // req.userId = decoded.id;
    // req.isAdmin = decoded.isAdmin;
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(400).json({ message: "Invalid token." });
  }
};

module.exports = verifyToken;
