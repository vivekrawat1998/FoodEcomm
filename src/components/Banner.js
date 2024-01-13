import React from "react";

const Banner = () => {
  return (
    <div className="container pt-5">
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-8">
        <div className="overflow-hidden rounded-lg   ">
          <img  className="hover:scale-105 transition-transform" src="/banner__1.webp" alt="" />
        </div>
        <div className="overflow-hidden rounded-lg  ">
          <img className="hover:scale-105 transition-transform" src="/banner__2.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
