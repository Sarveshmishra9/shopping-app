const User = require("../models/User"); //  user-model
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// List of Cloudinary avatar URLs (from manual or programmatic upload)
const avatarUrl = [
  //urls
  'https://res.cloudinary.com/clouddevs/image/upload/v1744638146/starry-avatars/oshxkhv4vguyqpb41upj.png',
  'https://res.cloudinary.com/clouddevs/image/upload/v1744638147/starry-avatars/o978glghq358xtn1hupt.png',
  'https://res.cloudinary.com/clouddevs/image/upload/v1744638146/starry-avatars/znus8cfx0kyt8spcbuiu.png',
  'https://res.cloudinary.com/clouddevs/image/upload/v1744638140/starry-avatars/l0q0mr1kfeelmef4xija.png',
  'https://res.cloudinary.com/clouddevs/image/upload/v1744638145/starry-avatars/ebmefvxicyvhznyzgsi0.png',
  'https://res.cloudinary.com/clouddevs/image/upload/v1744638144/starry-avatars/umblhlxj2uuhybaxdinv.png',
  'https://res.cloudinary.com/clouddevs/image/upload/v1744638142/starry-avatars/wpilaauov0b6wt6tropl.png',
  'https://res.cloudinary.com/clouddevs/image/upload/v1744638142/starry-avatars/wpilaauov0b6wt6tropl.png',
  'https://res.cloudinary.com/clouddevs/image/upload/v1744638136/starry-avatars/balgiug0dszmxgnumutd.png',
  'https://res.cloudinary.com/clouddevs/image/upload/v1744638135/starry-avatars/zwghgg2ykbglon3eskma.png',
  'https://res.cloudinary.com/clouddevs/image/upload/v1744638134/starry-avatars/evym4vj4gu6y7uh3z75l.png',
  'https://res.cloudinary.com/clouddevs/image/upload/v1744638132/starry-avatars/xwub844fkwidntrmkspi.png',
  'https://res.cloudinary.com/clouddevs/image/upload/v1744638131/starry-avatars/icbxwdaykenyhows79vk.png',
  'https://res.cloudinary.com/clouddevs/image/upload/v1744638129/starry-avatars/we3hzgdquszhft3z3u6x.png',
  'https://res.cloudinary.com/clouddevs/image/upload/v1744638126/starry-avatars/t6catvolroftxakkqd8i.png'

];

// Generate JWT token
const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      isAdmin: user.isAdmin
    },
    "secret123",
    { expiresIn: "7d" }
  );
  //   jwt.sign() creates a token using the user's ID and your secret key.
};

// Register
exports.registerUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ error: "Email already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const randomAvatars = avatarUrl[Math.floor(Math.random() * avatarUrl.length)];

  const user = new User({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    avatarUrl: randomAvatars,
  });
  await user.save();
  console.log("Password from frontend:", password);
  console.log("Password from DB:", user.password);

  const token = generateToken(user);

  res.cookie("token", token, {
    httpOnly: true,
    secure: false, // true in production
    sameSite: "Lax",
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });

  res.status(201).json({ message: "User registered successfully" });
};

// Login
exports.loginUser = async (req, res) => {
  const { email, password } = req.body; // Gets the login form data (email, password) from the frontend.
  console.log("Login data received:", { email, password });

  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      console.log("User not found");
      return res.status(400).json({ message: "User not found" }); //Finds a user with the given email. If not found → return error.
    }

    console.log("User found:", user);

    if (!password || typeof password !== "string") {
      console.log("Invalid password received from frontend");
      return res.status(400).json({ message: "Invalid input" });
    }

    const isMatch = await bcrypt.compare(password, user.password); // checks if entered password matches the hashed password in DB.
    console.log("Password match result:", isMatch);
    if (!isMatch) {
      console.log("Password did not match");
      return res.status(400).json({ message: "Invalid credentials" });
    }

  const token = jwt.sign(
    { id: user._id, email: user.email, isAdmin: user.isAdmin }, // include isAdmin here
    "secret123", // or process.env.JWT_SECRET if you're using .env
    { expiresIn: "1d" }
  );

     console.log("Login successful, token:", token);

  res.cookie("token", token, {
    httpOnly: true,
    secure: false, // true in production
    sameSite: "Lax",
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  })
  .status(200)
  .json({ message: "Login successful", isAdmin: user.isAdmin,token, user  });

  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
};




