import { createContext, useState } from "react";

const CartContext = createContext(); //creates empty box

const CartContextProvider = ({ children }) => {
   const [cart, setCart] = useState(0);

   const handleChange = (inc) => {
      setCart(cart + inc);
   };

   return (
      <CartContext.Provider value={{ cart, handleChange }}>
         {children}
      </CartContext.Provider>
   ); // connect app to that box
};

export { CartContextProvider, CartContext };

// Provider provides the value
// Consumer takes the value
