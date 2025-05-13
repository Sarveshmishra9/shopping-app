const User = require("../models/User"); //  user-model
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const signUpSchema = require("../models/inputValidationSchema").signUpSchema;
const generateAccessToken = require("../utils/TokenUtils").generateAccessToken;
const generateRefreshToken =
  require("../utils/TokenUtils").generateRefreshToken;
const ExpressError = require("../utils/express-error");
const RefreshTokenModel = require("../models/RefreshToken");
const loginSchema = require("../models/inputValidationSchema").loginSchema;

// List of Cloudinary avatar URLs (from manual or programmatic upload)
const avatarUrl = [
  //urls
  "https://res.cloudinary.com/clouddevs/image/upload/v1744638146/starry-avatars/oshxkhv4vguyqpb41upj.png",
  "https://res.cloudinary.com/clouddevs/image/upload/v1744638147/starry-avatars/o978glghq358xtn1hupt.png",
  "https://res.cloudinary.com/clouddevs/image/upload/v1744638146/starry-avatars/znus8cfx0kyt8spcbuiu.png",
  "https://res.cloudinary.com/clouddevs/image/upload/v1744638140/starry-avatars/l0q0mr1kfeelmef4xija.png",
  "https://res.cloudinary.com/clouddevs/image/upload/v1744638145/starry-avatars/ebmefvxicyvhznyzgsi0.png",
  "https://res.cloudinary.com/clouddevs/image/upload/v1744638144/starry-avatars/umblhlxj2uuhybaxdinv.png",
  "https://res.cloudinary.com/clouddevs/image/upload/v1744638142/starry-avatars/wpilaauov0b6wt6tropl.png",
  "https://res.cloudinary.com/clouddevs/image/upload/v1744638142/starry-avatars/wpilaauov0b6wt6tropl.png",
  "https://res.cloudinary.com/clouddevs/image/upload/v1744638136/starry-avatars/balgiug0dszmxgnumutd.png",
  "https://res.cloudinary.com/clouddevs/image/upload/v1744638135/starry-avatars/zwghgg2ykbglon3eskma.png",
  "https://res.cloudinary.com/clouddevs/image/upload/v1744638134/starry-avatars/evym4vj4gu6y7uh3z75l.png",
  "https://res.cloudinary.com/clouddevs/image/upload/v1744638132/starry-avatars/xwub844fkwidntrmkspi.png",
  "https://res.cloudinary.com/clouddevs/image/upload/v1744638131/starry-avatars/icbxwdaykenyhows79vk.png",
  "https://res.cloudinary.com/clouddevs/image/upload/v1744638129/starry-avatars/we3hzgdquszhft3z3u6x.png",
  "https://res.cloudinary.com/clouddevs/image/upload/v1744638126/starry-avatars/t6catvolroftxakkqd8i.png",
];

// Register
exports.registerUser = async (req, res, next) => {
  console.log("registering user :", req.body);
  const parseResult = signUpSchema.safeParse(req.body);

  if (!parseResult.success) {
    next(
      new ExpressError({
        status: 400,
        message: parseResult.error.issues[0].message,
      }),
    );
  }

  let { firstName, lastName, email, password } = req.body;
  email = email.toLowerCase(); //lowercase

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      next(new ExpressError({ status: 400, message: "Email already exists" }));
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const randomAvatars =
      avatarUrl[Math.floor(Math.random() * avatarUrl.length)];

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

    const refreshToken = generateRefreshToken(user);

    //set the refresh token in db
    RefreshTokenModel.create({
      userId: user._id,
      refreshToken: refreshToken,
    });

    res.status(201).json({
      message: "User registered successfully",
    });
  } catch (err) {
    console.error("Registration error:", err);
    next(new ExpressError({ status: 500, meaning: "Server error" }));
  }
};

// Login
exports.loginUser = async (req, res) => {
  const parsedResult = loginSchema.safeParse(req.body);
  if (!parsedResult.success) {
    console.log("bad request error as parsing is not successful");
    next(
      new ExpressError({
        status: 400,
        message: parsedResult.error.issues[0].message,
      }),
    );
  }

  let { email, password } = req.body; // Gets the login form data (email, password) from the frontend.
  email = email.toLowerCase(); //lowercase
  console.log("Login data received:", { email, password });

  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      console.log("User not found");
      next(new ExpressError({ status: 400, message: "User not found" }));
    }

    console.log("User found:", user);

    // if (!password || typeof password !== "string") {
    //   console.log("Invalid password received from frontend");
    //   return res.status(400).json({ message: "Invalid input" });
    // }

    const isMatch = await bcrypt.compare(password, user.password); // checks if entered password matches the hashed password in DB.
    console.log("Password match result:", isMatch);
    if (!isMatch) {
      console.log("Password did not match");
      next(new ExpressError({ status: 400, message: "Invalid credentials" }));
    }
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    // Update refresh token in database
    RefreshTokenModel.create({
      userId: user._id,
      refreshToken: refreshToken,
    });

    console.log("Login successful, accessToken:", accessToken);

    // Set tokens in cookies
    res.cookie("accessToken", accessToken, {
      secure: false,
      sameSite: "Lax",
      maxAge: 15 * 60 * 1000, // 15 minutes
    });

    res.status(200).json({
      message: "Login successful",
      isAdmin: user.isAdmin,
      accessToken,
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
