require('dotenv').config();  
const express = require('express');  
const app = express(); 
const cors = require('cors');   // Allows frontend (React) to talk to backend
const mongoose = require('mongoose');  
const userRoutes = require("./routes/userRoutes");       
const productRoutes = require("./routes/productRoutes");
const cookieParser = require("cookie-parser");


app.use(express.json());   // Parse incoming JSON requests
app.use(cookieParser()); // ✅ Parse cookies
app.use(                 // Enable CORS for frontend-backend communication
  cors({            
    origin:"http://localhost:5173", // ✅ Your frontend URL
    credentials: true,              // ✅ Allow cookies
  })
);

// All user-related routes will start with /api/users
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

main()
.then( () => {
    console.log("successful");
    app.listen  ( 8080 , () => {
      console.log("server is listening")
    });
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/e-commerce')
}

// app.use("/api/products", productRoutes);


// mongoose.connect(process.env.MONGO_URI, {  
//   useNewUrlParser: true,  
//   useUnifiedTopology: true,  
// }).then(() => console.log("MongoDB Connected")).catch(err => console.log(err));  



app.get("/", (req, res) => {  
  res.send("Backend Running");  
});  

// const PORT = process.env.PORT || 5000;  
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));  
