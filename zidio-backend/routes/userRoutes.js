const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserData } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const verifyToken  = require('../middleware/verifyToken');
const User = require("../models/User")

// Register and Login routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Profile Route (Protected)
router.get("/profile", (req, res) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "Unauthorized" });
  
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.status(403).json({ message: "Invalid token" });
      res.json({ user });
    });
  });
  
  // Logout
  router.post("/logout", (req, res) => {
    res.clearCookie("token");
    res.json({ message: "Logged out" });
  });

// Protected route – Only accessible with a valid token
router.get('/me',  verifyToken, async (req, res) => {

  try {
    const user = await User.findById(req.user.id).select("-password"); // 🔐 exclude password

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user); // 👈 frontend will get name, email, etc.
  } catch (err) {
    console.error("Fetch user error:", err);
    res.status(500).json({ message: "Server error" });
  }
});




module.exports = router;
