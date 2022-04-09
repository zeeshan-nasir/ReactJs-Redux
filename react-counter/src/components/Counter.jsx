import { useState } from "react";

const Counter = () => {
   const [count, setCount] = useState(0);

   const [color, setColor] = useState("green");

   const handleChange = (value) => {
      if (value === 2) {
         setCount(count * value);
         setColor("green");
      }
      else {
         setCount(count + value);
         if ((count + value) % 2 === 0) {
            setColor("green");
         }
         else {
            setColor("red")
         }
      }
   }

   return (
      <div>
         <h1>Counter</h1>
         <h2 className={color}>{count}</h2>
         <button onClick={() => handleChange(1)}>Add</button>
         <button onClick={() => handleChange(-1)}>Subtract</button>
         <button onClick={() => handleChange(2)}>Double</button>
      </div>
   )
}

export { Counter };