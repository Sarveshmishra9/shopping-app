import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductDetails() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Replace with your actual API endpoint
    axios.get("http://localhost:8080/api/products/category/men")
      .then(res => setProduct(res.data))
      .catch(err => console.error("API Error:", err));
  }, []);

  if (!product) return <div className="text-center p-8">Loading...</div>;

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-900 text-white p-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Images */}
        <div className="flex flex-col items-center gap-4">
          <img src={product.mainImage} alt="Main Product" className="rounded-xl w-full" />
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((img, idx) => (
              <img key={idx} src={img} alt={`thumb-${idx}`} className="rounded-xl h-20 object-cover" />
            ))}
          </div>
        </div>

        {/* Right Details */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">{product.brand}</h2>
          <p className="text-lg">{product.name}</p>
          <p className="text-yellow-400 text-xl font-semibold">
            ₹{product.price}
          </p>
          <p className="text-sm text-gray-400">(inclusive of all taxes)</p>

          <div className="flex items-center space-x-2">
            <span className="text-yellow-400 flex items-center">
              <Star className="w-4 h-4 fill-yellow-400 mr-1" />
              {product.rating}
            </span>
            <span className="text-sm text-gray-400">({product.totalRatings} ratings)</span>
          </div>

          {/* Sizes */}
          <div className="flex space-x-2">
            {product.sizes.map((size, idx) => (
              <Button key={idx} variant="outline" className="bg-gray-800 border-gray-700 text-white">
                {size.label} {size.stock <= 2 && <span className="text-red-500 ml-1 text-xs">({size.stock} left)</span>}
              </Button>
            ))}
          </div>

          <Button className="bg-yellow-400 text-black hover:bg-yellow-500">ADD TO BAG</Button>

          <div className="text-sm text-gray-400">
            <p>Design: {product.details.design}</p>
            <p>Fit: {product.details.fit}</p>
            <p>Neck: {product.details.neck}</p>
            <p>Occasion: {product.details.occasion}</p>
            <p>Sleeve Style: {product.details.sleeveStyle}</p>
            <p>Hemline: {product.details.hemline}</p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Product Reviews</h3>
            <p className="text-sm text-gray-300">
              <strong>{product.recommendPercent}%</strong> of verified buyers recommend this product
            </p>
            <p className="text-xl font-bold text-yellow-400">{product.rating}</p>
            <div className="text-sm text-gray-400">{product.totalRatings} ratings</div>

            {product.reviews.map((review, idx) => (
              <div key={idx} className="my-1">
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400" />
                  <span className="text-sm">{review.stars} star</span>
                </div>
                <div className="w-full bg-gray-700 h-1 rounded-full mt-1">
                  <div className="bg-green-400 h-1 rounded-full" style={{ width: `${review.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// export default ProductDetails;
