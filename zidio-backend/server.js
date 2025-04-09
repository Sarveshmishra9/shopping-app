require('dotenv').config();  
const express = require('express');  
const app = express(); 
const cors = require('cors');  
const mongoose = require('mongoose');  
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");


main()
.then( () => {
    console.log("successfull")
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/e-commerce')
}

// app.use("/api/users", userRoutes);
// app.use("/api/products", productRoutes);


 
// app.use(cors());  
app.use(express.json());  


// mongoose.connect(process.env.MONGO_URI, {  
//   useNewUrlParser: true,  
//   useUnifiedTopology: true,  
// }).then(() => console.log("MongoDB Connected")).catch(err => console.log(err));  

app.listen  ( 8080 , () => {
  console.log("server is listening")
});

app.get("/", (req, res) => {  
  res.send("Backend Running");  
});  

// const PORT = process.env.PORT || 5000;  
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));  
