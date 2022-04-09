import { useState } from "react";

export const Inventory = () => {
   const [inv, setInv] = useState({
      books: 10,
      notebooks: 13,
      pens: 40,
      inkpens: 27
   });

   // Create add and remove functions here that changes the
   // state.

   const handleChange = (value, item) => {
      if ((inv[`${item}`] <= 0) && (value === -1)) {
         alert("You can't go below zero!");
         return;
      }

      inv[`${item}`] = inv[`${item}`] + value;

      setInv({ ...inv });
   }


   return (
      <div style={{
         border: "1px solid black",
         borderRadius: "3px",
         padding: "10px",
         display: "flex",
         flexDirection: "column",
         width: "400px",
      }}>
         <div className="items">
            <span>Books: </span>
            <button className="circlularButton" onClick={() => handleChange(1, "books")}>+</button>
            <button className="circlularButton" onClick={() => handleChange(-1, "books")}>-</button>
            <span>{inv.books}</span>
         </div>
         <div className="items">
            <span>Notebooks: </span>
            <button className="circlularButton" onClick={() => handleChange(1, "notebooks")}>+</button>
            <button className="circlularButton" onClick={() => handleChange(-1, "notebooks")}>-</button>
            <span>{inv.notebooks}</span>
         </div>
         <div className="items">
            <span>Pen: </span>
            <button className="circlularButton" onClick={() => handleChange(1, "pens")}>+</button>
            <button className="circlularButton" onClick={() => handleChange(-1, "pens")}>-</button>
            <span>{inv.pens}</span>
         </div>
         <div className="items">
            <span>Ink Pens: </span>
            <button className="circlularButton" onClick={() => handleChange(1, "inkpens")}>+</button>
            <button className="circlularButton" onClick={() => handleChange(-1, "inkpens")}>-</button>
            <span>{inv.inkpens}</span>
         </div>
         {/*calculate total and show it*/}

         total: {inv.notebooks + inv.pens + inv.books + inv.inkpens};
      </div>
   );
};
