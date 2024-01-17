import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import {AiOutlineShoppingCart, AiOutlineUser} from "react-icons/ai"
import Cartcounterbadge from "./Cartcounterbadge";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="sticky top-0 z-10  bg-white  ">
      <div className="container lg:block hidden">
        <div className="flex justify-between items-center p-8">
          <h1 className="text-4xl font-medium">LOGO</h1>
          <div className="relative w-full max-w-[500px]">
            <input
              className="outline-none border-none px-6 py-3 rounded-[30px] w-full bg-[#f2f3f5]"
              placeholder="search for products.."
              type="text"
            />
            <IoSearchOutline
              className="absolute top-0 mt-4 text-gray-500 mr-5 right-0 "
              size={20}
            />
          </div>
          <div className="flex gap-4">
           <div className="items_wrapper ">
               <AiOutlineUser/>
           </div>
           <Link to ="/cart" className="items_wrapper relative cursor-pointer">
               <AiOutlineShoppingCart/>
               <Cartcounterbadge  size="w-[25px] h-[25px]"/>
           </Link>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Navbar;
