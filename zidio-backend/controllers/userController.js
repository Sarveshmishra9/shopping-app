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
const generateAccessToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      isAdmin: user.isAdmin
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" } // short lived
  );
  //   jwt.sign() creates a token using the user's ID and your secret key.
};

// Generate Refresh Token
const generateRefreshToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, isAdmin: user.isAdmin },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" } // long lived
  );
};

// Register
exports.registerUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {

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

 

  console.log("Password from frontend:", password);
  console.log("Password from DB:", user.password);

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  // Set tokens in cookies
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: false,
    sameSite: "Lax",
    maxAge: 15 * 60 * 1000, // 15 minutes
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: false,
    sameSite: "Lax",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  user.refreshToken = refreshToken;
  await user.save();

  res.status(201).json({
    message: "User registered successfully" , accessToken});

   } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ message: "Server error" });
  }

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

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

     // Update refresh token in database
     user.refreshToken = refreshToken;
     await user.save();

      console.log("Login successful, accessToken:", accessToken);

  // Set tokens in cookies
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: false,
    sameSite: "Lax",
    maxAge: 15 * 60 * 1000, // 15 minutes
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: false,
    sameSite: "Lax",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
  
  res.status(200).json({
    message: "Login successful",
    isAdmin: user.isAdmin, accessToken
  });

  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Refresh Token Route
exports.refreshToken = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ message: "No refresh token provided" });
  }

  try {
    const decoded = jwt.verify(refreshToken,  process.env.REFRESH_TOKEN_SECRET);

    const user = await User.findById(decoded.id);

    if (!user || user.refreshToken !== refreshToken) {
      return res.status(403).json({ message: "Invalid refresh token" });
    }

    const newAccessToken = generateAccessToken(user);

    res.cookie("accessToken", newAccessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
      maxAge: 15 * 60 * 1000,
    });

    res.status(200).json({ message: "Access token refreshed" });
  } catch (err) {
    console.error("Refresh token error:", err);
    res.status(403).json({ message: "Invalid refresh token" });
  }
};


// Logout
exports.logoutUser = async (req, res) => {
  try {
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");

    // Also remove refresh token from database
    if (req.user?.id) {
      await User.findByIdAndUpdate(req.user.id, { refreshToken: "" });
    }

    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ message: "Server error during logout" });
  }
};



