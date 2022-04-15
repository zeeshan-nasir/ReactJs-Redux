import React, { useRef } from "react";
import "./DivRef.css";

export default function DivRef() {
   const topDivRef = useRef(null);
   const bottomDivRef = useRef(null);

   return (
      <div>
         <div
            className="coral text"
            ref={topDivRef}
            onClick={() => {
               bottomDivRef.current.scrollIntoView({
                  behavior: "smooth",
               });
            }}
         >
            Scroll To Bottom
         </div>
         <div className="purple"></div>
         <div className="coral"></div>
         <div className="purple"></div>
         <div className="coral"></div>
         <div className="purple"></div>
         <div className="coral"></div>
         <div className="purple"></div>
         <div className="coral"></div>
         <div className="purple"></div>
         <div className="coral"></div>
         <div className="purple"></div>
         <div className="coral"></div>
         <div className="purple"></div>
         <div className="coral"></div>
         <div className="purple"></div>
         <div className="coral"></div>
         <div className="purple"></div>
         <div className="coral"></div>
         <div className="purple"></div>
         <div className="coral"></div>
         <div className="purple"></div>
         <div className="coral"></div>
         <div className="purple"></div>
         <div className="coral"></div>
         <div className="purple"></div>
         <div className="coral"></div>
         <div className="purple"></div>
         <div className="coral"></div>
         <div className="purple"></div>
         <div className="coral"></div>
         <div className="purple"></div>
         <div className="coral"></div>
         <div className="purple"></div>
         <div className="coral"></div>
         <div className="purple"></div>
         <div className="coral"></div>
         <div className="purple"></div>
         <div className="coral"></div>
         <div
            className="purple text"
            ref={bottomDivRef}
            onClick={() => {
               topDivRef.current.scrollIntoView({
                  behavior: "smooth",
               });
            }}
         >
            Scroll To Top
         </div>
      </div>
   );
}
