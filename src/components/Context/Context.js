import { createContext, useState, useEffect } from "react";

export const Cart = createContext();


const Context = ({children}) => {
    const [product, setProduct] =useState([])
    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
          setProduct(JSON.parse(storedCart));
        }
        console.log(storedCart)
      }, []);
      useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(product));
      }, [product]);
  return (
    <Cart.Provider value={{product, setProduct}}>
      {children}
    </Cart.Provider>
  );
}
export default Context;

