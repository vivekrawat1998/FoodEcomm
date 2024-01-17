import React, { useContext, useEffect, useState } from "react";
import { Cart } from "./Context/Context";
import { RxCross1 } from "react-icons/rx";

const CartComponent = () => {
  const { product, setProduct } = useContext(Cart);
  const [Total, setTotal] = useState()

  // useEffect(() =>{
  //  setTotal(product.reduce((acc, curr) => acc + Number(curr.price), 0))
  // },[])
  useEffect(() => {
      let total = 0
      for(let i=0; i<product.length; i++){
        total+= Number(product[i].price)
      }
      setTotal(total)
      
  },[])


   
  const handleRemoveFromCart = (productId) => {
    const updatedCart = product.filter((item) => item.id !== productId);
    setProduct(updatedCart);
  };

  return (
    <div className="">
      <h3 className="text-center text-xl font-semibold">Your Cart</h3>
      <p>Total Price:{Total}</p>
      <div className="container gap-3 mt-5 grid ">
        {product?.map((el) => (
          <div
            key={el.id}
            className="grid grid-cols-3 place-items-center"
          >
            <div className="col-span-1 w-full h-full max-w-[300px] max-h-[250px]">
              <img
                className=" w-full h-full object-cover"
                src={el.image}
                alt=""
              />
            </div>
            <div className="inline-flex gap-3 items-center  ">
              <button className="border-2 px-2 grid place-items-center text-bold text-xl rounded-md">-</button>
              <p>1</p>
              <button className="border-2 px-2 grid place-items-center text-bold text-xl rounded-md">+</button>
            </div>
            <div className="space-y-3">
              <h1 className="text-lg font-medium">{el.name}</h1>
              <p className="text-2xl text-red-500 font-semibold">{el.price}</p>               
               <p onClick={() => handleRemoveFromCart(el.id)} className="hover:bg-accentDark border-2 p-2 grid place-items-center bg-accent rounded-xl text-white"> Remove</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartComponent;
