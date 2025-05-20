import React, { useEffect, useState } from "react";
import { ShopContext } from "../context/Shopcontext";
import { useContext } from "react";
import Title from "./Title";
import ProductItems from "./ProductItems";

const Bestseller = () => {
  const { products } = useContext(ShopContext);
  const [Bestsellers, setBestSellers] = useState([]);

  useEffect(() => {
    const bestProducts = products.filter((item) => item.bestseller);
    setBestSellers(bestProducts.slice(0, 5));
  }, []);
  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={`BEST`} text2={`SELLERS`} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {Bestsellers.map((item, index) => (
          <ProductItems
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Bestseller;
