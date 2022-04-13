import React, { useEffect, useState } from 'react';

const Timer = ({ start, end }) => {
   const [count, setCount] = useState(start);
   // const [active, setActive] = useState(false);

   useEffect(() => {
      // let id = null;
      // if (active == true) {
      let id = setInterval(() => {
         setCount((preValue) => {
            console.log("object");
            if (preValue >= end) {
               clearInterval(id);
               return end;
            }
            return preValue + 1;
         });
      }, 1000);
      // }

      return () => {
         clearInterval(id);
      }
   }, [])

   return (
      <div className='timer'>
         <h1>Timer</h1>
         <div className='time'>
            <h2>{count}</h2>
         </div>
         {/* <button className='btn' onClick={setActive(false)}>Start Timer</button> */}
      </div>
   )
}

export default Timer;
