import React, { useContext } from 'react';
import { CartContext } from './Context/Context'; 
const Cartcounterbadge = ({size}) => {
  const {product} =useContext(CartContext)
  return (
    <div className={`absolute bg-red-600 text-white text-[14px] ${size} -right-3 -top-1 rounded-full grid place-items-center`}>
      {product.length}
    </div>
  );
}

export default Cartcounterbadge;
