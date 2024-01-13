import React from "react";
import {
  LiaGiftSolid,
  LiaMoneyBillWaveSolid,
  LiaShippingFastSolid,
} from "react-icons/lia";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  const data = [
    {
      id: 0,
      name: "Free Shipping",
      icon: <LiaShippingFastSolid />,
    },
    {
      id: 1,
      name: "Free Shipping",
      icon: <LiaMoneyBillWaveSolid />,
    },
    {
      id: 2,
      name: "Free Shipping",
      icon: <LiaGiftSolid />,
    },
    {
      id: 3,
      name: "Free Shipping",
      icon: <FiPhoneCall />,
    },
  ];

  return (
    <div className="container pt-16">
     
        <div  className="grid lg:grid-cols-4  md:grid-cols-2  gap-4">
        {data.map((el, id) => (
          <div key={id} className="flex items-center gap-4">
            <div className="bg-gray-400 rounded-full w-[50px] text-accentDark text-[24px] h-[50px] grid place-items-center">
              {el.icon}
            </div>
            <div className="">
              <h1 className="text-xl font-medium">{el.name}</h1>
              <p>lorem epsum dolor.</p>
            </div>
          </div>
               ))}
        </div>
    </div>
  );
};

export default Footer;
