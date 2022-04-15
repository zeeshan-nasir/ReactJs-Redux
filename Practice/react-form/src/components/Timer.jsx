import { useState, useEffect, useRef } from "react";

const Timer = () => {
   const [counter, setCounter] = useState(0);

   const counterRef = useRef(null);
   useEffect(() => {
      startCounter();
   }, []);

   const startCounter = () => {
      counterRef.current = setInterval(() => {
         setCounter((v) => v + 1);
      }, 1000);
   };

   return (
      <div>
         <h3>{counter}</h3>
         <button
            onClick={() => {
               clearInterval(counterRef.current);
            }}
         >
            Stop
         </button>
         <button
            onClick={() => {
               startCounter();
            }}
         >
            Start
         </button>
         <button
            onClick={() => {
               setCounter(0);
               clearInterval(counterRef.current);
            }}
         >
            Reset
         </button>
      </div>
   );
};

export default Timer;
