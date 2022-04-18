import React from "react";
import { useState, useEffect } from "react";

const Counter = () => {
   const [count, setCount] = useState(10);

   useEffect(() => {
      let id = setInterval(() => {
         setCount((preValue) => {
            if (preValue <= 0) {
               clearInterval(id);
               return 0;
            }
            return preValue - 1;
         });
      }, 1000);

      return () => {
         clearInterval(id);
      };
   }, []);

   return (
      <div>
         <h3>Count: {count}</h3>
      </div>
   );
};

export default Counter;
