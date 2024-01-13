import React from "react";

const LastBanner = () => {
  return (
    <div className="container pt-5">
      <div className="space-y-2 pb-5">
        <h1 className="font-bold text-2xl">Latest News</h1>
        <p className="text-gray-500">
          Present posts in a best way to highlight interesting moments of your
          blog.
        </p>
      </div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        <div className="space-y-3">
          <div>
            <img
              className="object-cover h-full w-full hover:scale-105 transition-transform"
              src="/post__1.webp"
              alt=""
            />
          </div>
          <div className="space-y-3">
             <p className="text-accent font-medium">Aug 27, 2023 / 8 Comments</p>
            <h1 className="text-xl font-bold">Healthy Food Healthy Life</h1>
          </div>
        </div>
        <div className="space-y-3">
          <div>
            <img
              className="object-cover h-full w-full hover:scale-105 transition-transform"
              src="/post__2.webp"
              alt=""
            />
          </div>
          <div className="space-y-3">
             <p className="text-accent font-medium">Aug 27, 2023 / 8 Comments</p>
            <h1 className="text-xl font-bold">Healthy Food Healthy Life</h1>
          </div>
        </div>
        <div className="space-y-3">
          <div>
            <img
              className="object-cover h-full w-full hover:scale-105 transition-transform"
              src="/post__3.webp"
              alt=""
            />
          </div>
         <div className="space-y-3">
             <p className="text-accent font-medium">Aug 27, 2023 / 8 Comments</p>
            <h1 className="text-xl font-bold">Healthy Food Healthy Life</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastBanner;
