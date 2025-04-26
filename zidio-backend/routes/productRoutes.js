const express = require("express");
const router = express.Router();
const Product = require("../models/Product");


const  {
  getMenListings,
  getWomenListings,
  getKidsListings,
} = require("../controllers/listingController.js");

router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

router.get("/category/men", getMenListings);

// Women listings
router.get("/category/women", getWomenListings);

// Kids listings
router.get("/category/kids", getKidsListings);



module.exports = router;
