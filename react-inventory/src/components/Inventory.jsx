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

   const bookChange = (value) => {
      if (inv.books <= 0) {
         return;
      }
      let updatedValue = {};
      updatedValue = { books: inv.books + value };

      setInv(inv => ({
         ...inv,
         ...updatedValue
      }));
   }

   const noteChange = (value) => {
      if (inv.notebooks <= 0) {
         return;
      }
      let updatedValue = {};
      updatedValue = { notebooks: inv.notebooks + value };

      setInv(inv => ({
         ...inv,
         ...updatedValue
      }));
   }

   const penChange = (value) => {
      if (inv.pens <= 0) {
         return;
      }
      let updatedValue = {};
      updatedValue = { pens: inv.pens + value };

      setInv(inv => ({
         ...inv,
         ...updatedValue
      }));
   }

   const inkChange = (value) => {
      if (inv.inkpens <= 0) {
         return;
      }
      let updatedValue = {};
      updatedValue = { inkpens: inv.inkpens + value };

      setInv(inv => ({
         ...inv,
         ...updatedValue
      }));
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
            <button className="circlularButton" onClick={() => bookChange(1)}>+</button>
            <button className="circlularButton" onClick={() => bookChange(-1)}>-</button>
            <span>{inv.books}</span>
         </div>
         <div className="items">
            <span>Notebooks: </span>
            <button className="circlularButton" onClick={() => noteChange(1)}>+</button>
            <button className="circlularButton" onClick={() => noteChange(-1)}>-</button>
            <span>{inv.notebooks}</span>
         </div>
         <div className="items">
            <span>Pen: </span>
            <button className="circlularButton" onClick={() => penChange(1)}>+</button>
            <button className="circlularButton" onClick={() => penChange(-1)}>-</button>
            <span>{inv.pens}</span>
         </div>
         <div className="items">
            <span>Ink Pens: </span>
            <button className="circlularButton" onClick={() => inkChange(1)}>+</button>
            <button className="circlularButton" onClick={() => inkChange(-1)}>-</button>
            <span>{inv.inkpens}</span>
         </div>
         {/*calculate total and show it*/}

         total: {inv.notebooks + inv.pens + inv.books + inv.inkpens}
      </div>
   );
};
