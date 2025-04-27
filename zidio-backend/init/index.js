const mongoose = require("mongoose");
const initData = require("./data.js");
const products = require("../models/Product.js");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/e-commerce");
}

main()
  .then((res) => {
    console.log("succeed");
  })
  .catch((err) => {
    console.log(err);
  });

const initDatabase = async () => {
  await products.deleteMany({});
  // initData.data = initData.data.map((obj) => ({
  //   ...obj,
  //   owener:"68092b2e4ebe4ff351cdbf6f"
  // }));
  await products.insertMany(initData.data);
  console.log("data was initialized.");
};

initDatabase();
