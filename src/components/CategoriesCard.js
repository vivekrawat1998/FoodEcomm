import React from "react";

const CategoriesCard = ({ name, counts, image, key }) => {
  return (
    <div>
      <div
        key={key}
        className="flex justify-between hover:scale-105 cursor-pointer transition-transform  p-6 border border-gray-300 rounded-md items-center"
      >
        <div className="space-y-4">
          <h1 className="font-medium text-lg">{name}</h1>
          <p className="text-gray-500">{counts}</p>
        </div>
        <img
          className="object-cover rounded-full w-[100px]"
          src={image}
          alt=""
        />
      </div>
    </div>
  );
};
export default CategoriesCard;
