import React, { useContext } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { Cart } from './Context/Context';

const Breakfastcard = ({ name, price, image }) => {
  const { product, setProduct } = useContext(Cart);

  const handleAddToCart = () => {
    const id = new Date().getTime();
    
    const newProduct = {
      id,
      name,
      price,
      image,
    };
    setProduct([...product, newProduct]);
  };

  return (
    <div className="border border-gray-200 rounded-lg cursor-pointer hover:border-gray-300 transition-transform hover:scale-105">
      <img className="" src={image} alt="" />
      <div className="space-y-2 relative p-4">
        <div className="flex gap-[2px] text-yellow-400">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h1 className="text-lg font-medium">{name}</h1>
        <p className="text-2xl text-red-500 font-semibold">{price}</p>
        <div
          onClick={handleAddToCart}
          className="absolute -top-4 right-5 bg-accent p-3 rounded-full text-white grid place-items-center "
        >
          <HiOutlineShoppingBag size={30} />
        </div>
      </div>
    </div>
  );
};

export default Breakfastcard;
