import { createContext, useContext, useState } from "react";

export const CartContext = createContext({
    product: [],
    Addtocart: () => {},
});

export const CartContextProvider = ({ children }) => {
    const [product, setProduct] = useState([]);

    const Addtocart = (cart) => {
        setProduct((prevState) => [...prevState, cart]);
    };

    return (
        <CartContext.Provider value={{ product, Addtocart }}>
            {children}
        </CartContext.Provider>
    );
};

export const UseCartContext = () => {
    const context = useContext(CartContext);
    return context;
};
