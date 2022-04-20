import React, { useContext } from "react";
// import { CartContext } from "../contexts/CartContext";
import { LangContext } from "../contexts/LanguageContext";

const Navbar = () => {
   // const { cart } = useContext(CartContext);

   const { lang } = useContext(LangContext);

   return (
      <nav
         style={{
            display: "flex",
            justifyContent: "end",
            border: "1px solid grey",
            height: "100px",
            alignItems: "center",
            fontSize: "2em",
            paddingRight: "50px",
         }}
      >
         {/* Cart: {cart} */}
         Lang = {lang}
      </nav>
   );
};

export default Navbar;
