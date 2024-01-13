import React from "react";
import FeatureCard from "./FeatureCard";

const Featurespage = () => {
  const data = [
    {
      id: 0,
      name: "Dried Mango",
      image: "/product__1.webp",
      price: "$200",
    },
    {
      id: 1,
      name: "Crunchy Crisps",
      image: "/product__2.webp",
      price: "$300",
    },
    {
      id: 2,
      name: "Jewel Cranberries",
      price: "$200",
      image: "/product__3.webp",
    },
    {
      id: 3,
      image: "/product__4.webp",
      name: "Almond organic",
      price: "$500",
    },
  ];
  return (
    <div className="container pt-8">
      <div className="sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-4 gap-3 grid">
        <div className="flex gap-2">
          <img
            className="object-cover w-full h-full"
            src="/feature__1.webp"
            alt=""
          />
        </div>
      {data.map((el => <FeatureCard
        name={el.name}
        key={el.id}
        price={el.price}
        image={el.image}/>))}
      </div>
    </div>
  );
};

export default Featurespage;
