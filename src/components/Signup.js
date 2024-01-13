import React from "react";
import { LuMailOpen } from "react-icons/lu";
const Signup = () => {
  return (
    <div className="bg-accent w-full h-full mt-6">
      <div className="container py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white  ">
        <div className="flex gap-4 items-center">
          <LuMailOpen className="text-[60px]" />
          <div className=" text-lg">
            <h1 className="font-bold text-xl">Sign up To Our Newsletters</h1>
            <p>...and receive $20 coupon for first shopping</p>
          </div>
        </div>
        <div className="max-w-[470px] w-full relative">
            <input type="text" placeholder="Your Email Address..." className="outline-none w-full h-full px-6 py-4 rounded-full border-none bg-white" />
            <button className="absolute top-[50%] right-2 bg-accentDark hover:bg-accent px-4 py-2 translate-y-[-50%] rounded-full ">
               Subscribe
            </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
