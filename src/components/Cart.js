import React, { useContext } from "react";
import { CartContext } from "./Context/Context";
import { RxCross1 } from "react-icons/rx"; // Replace with the correct path to your context file

const Cart = ({ setshow }) => {
  const { product } = useContext(CartContext); // Use your specific context

  console.log(product);

  return (
    <div
      onClick={() => setshow(false)}
      className="mt-16 fixed top-0 left-0 w-full h-screen z-20  "
    >
      <div
        className="max-w-[400px] w-full h-full bg-white absolute right-0 top-0 p-6"
        onclick={(e) => e.stopPropagation()}
      >
        <RxCross1
          className="absolute right-0 top-0 m-6 text-[24px] cursor-pointer"
          onclick={() => setshow(false)}
        />
        <h3 className="pt-6 text-lg font-medium text-gray-600 uppercase">
          Your cart
        </h3>
        <div className="mt-5">
          {product?.map((el, index) => (
            <div
              key={index}
              className="flex justify-between items-center"
            >
              <img className="h-[100px]" src={el.image} alt="" />
              <div className="">
                <h1 className="text-lg font-medium">{el.name}</h1>
                <p className="text-2xl text-red-500 font-semibold">
                  {el.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
