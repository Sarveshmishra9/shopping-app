import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/Shopcontext";
import Title from "./Title";
import ProductItems from "./ProductItems";

const Latescollection = () => {
  const { products } = useContext(ShopContext);
  const [LatestProducts, setLastestProduct] = useState([]);

  useEffect(() => {
    setLastestProduct(products.slice(0, 10));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={`LATEST`} text2={`COLLECTIONS`} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam labore
          ab animi quidem, eveniet aspernatur quia explicabo expedita
          repellendus reiciendis alias nemo quod,
        </p>
      </div>
      {/* Rendering products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6">
        {LatestProducts.map((item, index) => (
          <ProductItems
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Latescollection;
