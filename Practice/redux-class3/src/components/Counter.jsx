import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCount } from "../Redux/Counter/action";

const Counter = () => {
   const dispatch = useDispatch();
   const counter = useSelector((store) => store.counter);

   return (
      <div
         style={{
            width: "30%",
            margin: "auto",
            border: "1px solid grey",
            textAlign: "center",
            padding: "20px",
         }}
      >
         <h3>Counter: {counter}</h3>
         <button
            onClick={() => {
               dispatch(addCount(1));
            }}
         >
            Add 1
         </button>
      </div>
   );
};

export default Counter;
