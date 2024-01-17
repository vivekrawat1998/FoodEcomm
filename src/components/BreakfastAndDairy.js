import React from 'react';
import Breakfastcard from "./Breakfastcard";

const BreakfastAndDairy = () => {
  const data = [
    {
      id: 0,
      image: "/product__5.webp",
      name: "Fresh Tomato",
      price: 400
    },
    {
      id: 1,
      image: "/product__2 (1).webp",
      name: "Fresh Tomato",
      price: 300
    },
    {
      id: 2,
      image: "/product__2.webp",
      name: "Fresh Tomato",
      price: 400
    },
    {
      id: 3,
      image: "/product__3 (1).webp",
      name: "Fresh Tomato",
      price: 400
    },
  ];

  return (
    <div className="container pt-8 pb-9">
      <div className="lg:flex justify-between items-center">
        <div className="space-y-2">
          <h1 className="font-medium text-2xl">Breakfast & Dairy</h1>
          <p className="text-gray-500">
            Buy the best quality breakfast online from the big-basket stop near you.
          </p>
        </div>
        <div className="list-none space-x-4">
          <button className="item-btn">Eggs & Dairy</button>
          <button>Pizza</button>
          <button>Snacks</button>
        </div>
      </div>
      <div className="sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-4 gap-3 mt-5 grid">
        <div className="flex gap-2">
          <img
            className="object-cover w-full h-full"
            src="/feature__1.webp"
            alt=""
          />
        </div>
        {data.map(({ id, name, price, image }) => (
          <Breakfastcard
            key={id}
            name={name}
            price={price}
            image={image}
          />
        ))}
      </div>
    </div>
  );
};

export default BreakfastAndDairy;
