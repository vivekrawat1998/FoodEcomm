import React, { useContext } from 'react';
import { Cart } from './Context/Context';
const Cartcounterbadge = ({size}) => {
  const {product} =useContext(Cart)
  return (
    <div className={`absolute bg-red-600 text-white text-[14px] ${size} -right-3 -top-1 rounded-full grid place-items-center`}>
      {product.length}
    </div>
  );
}

export default Cartcounterbadge;
