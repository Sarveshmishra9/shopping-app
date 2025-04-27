

const Product = require("../models/Product");

// 1. Men Listings
const getMenListings = async (req, res) => {
  try {
    const listings = await Product.find({ gender: "men" });
    console.log(listings);
    res.status(200).json(listings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// 2. Women Listings
 const getWomenListings = async (req, res) => {
  try {
    const listings = await Product.find({ gender: "women" });
    res.status(200).json(listings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// 3. Kids Listings
 const getKidsListings = async (req, res) => {
  try {
    const listings = await Product.find({ gender: "kids" });
    res.status(200).json(listings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { getMenListings, getWomenListings  , getKidsListings };
