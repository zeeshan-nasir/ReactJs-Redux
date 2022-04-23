import React, { useEffect, useRef, useState } from "react";
import { Button } from "./Buttons";
import "./timer.css";

const Timer = () => {
   const [mode, setmode] = useState("timer");

   const [min, setMin] = useState(5);
   const [sec, setSec] = useState(0);

   const [stopMin, setStopMin] = useState(0);
   const [stopSec, setStopSec] = useState(0);
   const [millisec, setMillisec] = useState(0);

   const stopTimer = useRef(null);
   const stopWatch = useRef(null);

   // Timer

   const startTimer = () => {
      stopTimer.current = setInterval(() => {
         setSec((value) => {
            if (min === 0 && value === 0) {
               clearInterval(stopTimer.current);
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
   };

   // Stopwatch

   const startStopwatch = () => {
      stopWatch.current = setInterval(() => {
         setMillisec((value) => {
            if (stopSec === 59 && value === 99) {
               setStopSec(0);
               setMillisec(0);
               setStopMin((min) => {
                  return min + 1;
               });
               return 0;
            }

            if (value === 99) {
               setMillisec(0);
               setStopSec((v) => {
                  return v + 1;
               });
            }

            return value + 1;
         });
      }, 10);
   };

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
               <span className="font">
                  {sec < 10 ? "0" : null}
                  {sec}
               </span>
               s
            </div>
         ) : (
            <div className="countDiv">
               <span className="font">{stopMin}</span> m{" "}
               <span className="font">{stopSec}</span> s{" "}
               <span className="font">
                  {millisec < 10 ? "0" : null}
                  {millisec}
               </span>
               ms
            </div>
         )}
         {mode === "timer" ? (
            <div className="btnDiv">
               <Button
                  onClick={() => {
                     startTimer();
                  }}
               >
                  Start
               </Button>
               <Button
                  onClick={() => {
                     clearInterval(stopTimer.current);
                  }}
               >
                  Stop
               </Button>
               <Button
                  onClick={() => {
                     setMin(5);
                     setSec(0);
                     clearInterval(stopTimer.current);
                  }}
               >
                  Reset
               </Button>
            </div>
         ) : (
            <div className="btnDiv">
               <Button
                  onClick={() => {
                     startStopwatch();
                  }}
               >
                  Start
               </Button>
               <Button
                  onClick={() => {
                     clearInterval(stopWatch.current);
                  }}
               >
                  Stop
               </Button>
               <Button
                  onClick={() => {
                     setMillisec(0);
                     setStopSec(0);
                     setStopMin(0);
                     clearInterval(stopWatch.current);
                  }}
               >
                  Reset
               </Button>
            </div>
         )}
      </div>
   );
};

export default Timer;
