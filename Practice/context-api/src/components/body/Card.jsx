import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const Card = () => {
   const { handleChange } = useContext(CartContext);

   return (
      <div
         style={{
            width: "200px",
            height: "300px",
            backgroundColor: "teal",
            padding: "15px",
         }}
      >
         <button onClick={() => handleChange(1)}>Add to Cart</button>
      </div>
   );
};

export default Card;
