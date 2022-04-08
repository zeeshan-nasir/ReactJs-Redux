import { useState } from "react";

const Counter = () => {
   const [count, setCount] = useState(0);

   const [color, setColor] = useState("green");

   const handleChange = (value) => {
      setCount(count + value);
      if ((count + value) % 2 === 0) {
         setColor("green");
      }
      else {
         setColor("red")
      }
   }

   const double = () => {
      setCount(count * 2);
   }

   return (
      <div>
         <h1>Counter</h1>
         <h2 className={color}>{count}</h2>
         <button onClick={() => handleChange(1)}>Add</button>
         <button onClick={() => handleChange(-1)}>Subtract</button>
         <button onClick={() => double()}>Double</button>
      </div>
   )
}

export { Counter };