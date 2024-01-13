import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="container">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
        <div className="xl:col-span-2 xl:row-start-1 xl:row-end-[-1] relative">
          <img
            className="object-cover rounded-lg w-full h-full"
            src="/hero__1.webp"
            alt="hero img"
          />
          <div className="absolute max-w-[470px] sm:pb-0 sm:ml-16 ml-8  top-[50%] -translate-y-[50%] sm:space-y-4 ">
            <p className="sm:block hidden text-2xl">100% Original Dry Fruits</p>
            <p className="text-2xl sm:text-4xl md:text-6xl font-bold">
              Dried Fruits Best Healthy
            </p>
            <p className="text-gray-600 text-2xl pt-4 sm:pt-8">Starting At</p>
            <div className="text-red-600 text-2xl sm:text-4xl pb-4 sm:pb-8">
              $18.36
            </div>
            <div className="bg-accentDark px-4 py-2 text-[14px] gap-2 cursor-pointer hover:bg-accent text-white rounded-full w-fit flex items-center justify-between">
              Shop Now <BsArrowRight />
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            className="object-cover rounded-lg h-full w-full"
            src="/hero__2.webp"
            alt="hero 2"
          />
          <div className="absolute max-w-[470px]  sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
            <h1 className="text-2xl sm:text-4xl font-bold">Best Yummy Pizza</h1>
            <p className="text-gray-600 text-2xl pt-4 sm:pt-8">Starting At</p>
            <div className="text-red-600 text-2xl sm:text-4xl pb-4 sm:pb-8">
              $21
            </div>
            <div className="bg-accentDark px-4 py-2 text-[14px] gap-2 cursor-pointer hover:bg-accent text-white rounded-full w-fit flex items-center justify-between">
              Shop Now <BsArrowRight />
            </div>
          </div>
        </div>
        <div className="relative">
          <img className="w-full h-full object-cover" src="/hero__3.webp" alt="hero 3" />
          <div className="absolute top-[50%] -translate-y-[50%] sm:space-y-2 sm:ml-16 ml-8">
            <h1 className="font-bold text-2xl sm:text-4xl ">
              Best Yummy Chips
            </h1>
            <p className="text-gray-600 text-2xl pt-4 sm:pt-8">Starting At</p>
            <div className="text-red-600 text-2xl sm:text-4xl pb-4 sm:pb-8">
              $10
            </div>
            <div className="bg-accentDark px-4 py-2 text-[14px] gap-2 cursor-pointer hover:bg-accent text-white rounded-full w-fit flex items-center justify-between">
              Shop Now <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
