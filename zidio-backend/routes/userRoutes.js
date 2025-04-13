const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserData } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// Register and Login routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected route – Only accessible with a valid token
router.get('/me', authMiddleware, getUserData);

module.exports = router;
