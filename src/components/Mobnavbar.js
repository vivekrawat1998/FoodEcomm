import React from "react";
import { IoIosMenu } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import {AiOutlineShoppingCart, AiOutlineUser} from "react-icons/ai"
import Cartcounterbadge from "./Cartcounterbadge";
const Mobnavbar = () => {
  return (
    <div className="sticky top-0 z-10  bg-white  ">
      <div className="container p-8 lg:hidden">
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-2">
            <IoIosMenu size={30}  />
            <BsSearch size={24} />
          </div>
          <h1 className="text-4xl ">LOGO</h1>
        <div className="flex gap-2  text-[30px]">
            <AiOutlineUser />
          <div className=" relative cursor-pointer">
            <AiOutlineShoppingCart />
            <Cartcounterbadge size="w-[20px] h-[20px]" />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Mobnavbar;
