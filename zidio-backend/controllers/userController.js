const User = require('../models/User');   //  user-model
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Generate JWT token
const generateToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email, role: user.role }, 'secret123', { expiresIn: '1d' });
//   jwt.sign() creates a token using the user's ID and your secret key.
};

// Register
exports.registerUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({ firstName, lastName, email, password: hashedPassword });
  await user.save();


  const token = generateToken(user);

   res.status(201).json({ token });  // Sends the token back to the frontend.
};

// Login
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;     // Gets the login form data (email, password) from the frontend.


  const user = await User.findOne({ email });   
  if (!user) return res.status(400).json({ message: 'User not found' });   //Finds a user with the given email. If not found → return error.

  const isMatch = await bcrypt.compare(password, user.password);         // checks if entered password matches the hashed password in DB.
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  const token = generateToken(user);   // If login is successful → create a new JWT token and send it to the frontend.
  res.json({ token });
};

// Get logged in user
exports.getUserData = async (req, res) => {            //This gets info of logged-in user, using the token.
  const user = await User.findById(req.user.id).select('-password');
  res.json(user);
};
