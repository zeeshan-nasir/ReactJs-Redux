import { useState } from "react";

const Counter = () => {
   const [count, setCount] = useState(0);

   const handleChange = (value) => {
      if (value === 2) {
         setCount(count * value);
      }
      else {
         setCount(count + value);
      }
   }

   return (
      <div>
         <h1>Counter</h1>
         <h2 className={count % 2 === 0 ? "green" : "red"}>{count}</h2>
         <button onClick={() => handleChange(1)}>Add</button>
         <button onClick={() => handleChange(-1)}>Subtract</button>
         <button onClick={() => handleChange(2)}>Double</button>
      </div>
   )
}

export { Counter };