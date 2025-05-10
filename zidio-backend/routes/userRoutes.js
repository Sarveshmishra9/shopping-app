const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserData,
  refreshToken,
  logoutUser,
} = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Register and Login routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Profile Route (Protected)
// router.get("/profile", (req, res) => {
//     const token = req.cookies.token;
//     if (!token) return res.status(401).json({ message: "Unauthorized" });
//
//     jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//       if (err) return res.status(403).json({ message: "Invalid token" });
//       res.json({ user });
//     });
//   });
//
//   // Logout
//   router.post("/logout", verifyToken, logoutUser  )
//
// // Protected route – Only accessible with a valid token
// router.get('/me',  verifyToken, async (req, res) => {
//
//   try {
//     const user = await User.findById(req.user.id).select("-password"); // 🔐 exclude password
//
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//
//     res.json(user); // 👈 frontend will get name, email, etc.
//   } catch (err) {
//     console.error("Fetch user error:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });
//
//
// router.get("/refresh_token", refreshToken );
// //accessToken is short-lived (15 min), so if access token expires,
// // your frontend should automatically call /refresh_route to get a new one using refresh token.
// // Your refresh token will stay in browser cookie and database for 7 days.
//
//

module.exports = router;
