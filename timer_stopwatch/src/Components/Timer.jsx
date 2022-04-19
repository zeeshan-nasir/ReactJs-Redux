import React, { useEffect, useState } from "react";
import { Button } from "./Buttons";
import "./timer.css";

const Timer = () => {
   const [mode, setmode] = useState("timer");

   const [min, setMin] = useState(4);
   const [sec, setSec] = useState(59);

   const [stopSec, setStopSec] = useState(0);
   const [millisec, setMillisec] = useState(0);

   useEffect(() => {
      let id = setInterval(() => {
         setSec((value) => {
            if (min === 0 && value === 0) {
               clearInterval(id);
               return 0;
            }

            if (value === 0) {
               setSec(59);
               setMin((v) => {
                  return v - 1;
               });
            }

            return value - 1;
         });
      }, 1000);

      return () => {
         clearInterval(id);
      };
   }, [min]);

   useEffect(() => {
      let id = setInterval(() => {
         setMillisec((value) => {
            if (stopSec === 59 && value === 1000) {
               clearInterval(id);
               return 0;
            }

            if (value === 9999) {
               setMillisec(0);
               setStopSec((v) => {
                  return v + 1;
               });
            }

            return value + 1;
         });
      }, 1);

      return () => {
         clearInterval(id);
      };
   }, [stopSec]);

   return (
      <div className="card">
         <div className="titleDiv">
            <p
               onClick={() => setmode("timer")}
               className={mode === "timer" ? "timerClicked" : "timer"}
            >
               Timer
            </p>
            <p
               onClick={() => setmode("stop")}
               className={mode === "stop" ? "stopClicked" : "stop"}
            >
               Stopwatch
            </p>
         </div>
         {mode === "timer" ? (
            <div className="countDiv">
               <span className="font">{min}</span> m{" "}
               <span className="font">{sec}</span>s
            </div>
         ) : (
            <div className="countDiv">
               <span className="font">{stopSec}</span> s{" "}
               <span className="font">{millisec}</span>
            </div>
         )}
         <div className="btnDiv">
            <Button>Start</Button>
            <Button>Stop</Button>
            <Button>Reset</Button>
         </div>
      </div>
   );
};

export default Timer;
