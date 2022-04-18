import { useState } from "react";
import "./App.css";

function App() {
   const [data, setData] = useState({
      score: 76,
      wicket: 2,
      over: 50,
   });

   const handleChange = (value, name) => {
      if (data.score > 100 || data.wicket >= 12) {
         return;
      }

      data[`${name}`] += value;

      setData({ ...data });
   };

   return (
      <div className="App">
         <h3>India:</h3>
         <div className="banner">
            <div>
               Score: <h1 className="scoreCount">{data.score}</h1>
            </div>
            <div>
               Wicket: <h1 className="wicketCount">{data.wicket}</h1>
            </div>

            <div>
               Over:{" "}
               <h1 className="overCount">
                  {
                     // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
                     // if 1 more ball is thrown then over is now 5.0
                     // you have to write logic to form this string from current ball number.
                     Math.floor(data.over / 6) + "." + (data.over % 6)
                  }
               </h1>
            </div>
         </div>

         <div className="addScore">
            Add Score
            {/* these buttons should add the respective amount in the score */}
            <button
               className="addScore1"
               onClick={() => {
                  handleChange(1, "score");
               }}
            >
               Add 1
            </button>
            <button
               className="addScore4"
               onClick={() => {
                  handleChange(4, "score");
               }}
            >
               Add 4
            </button>
            <button
               className="addScore6"
               onClick={() => {
                  handleChange(6, "score");
               }}
            >
               Add 6
            </button>
         </div>

         <div className="addWicket">
            Add Wicket
            {/* Increase the count of wicket */}
            <button
               onClick={() => {
                  handleChange(1, "wicket");
               }}
            >
               Add 1 wicket
            </button>
         </div>

         <div className="addBall">
            Add ball
            {/* Increase the total number of balls thrown here. */}
            <button
               className="left1"
               onClick={() => {
                  handleChange(1, "over");
               }}
            >
               Add 1
            </button>
         </div>

         {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
         {data.score > 100 ? <h1 className="status">{"India Won"}</h1> : null}
      </div>
   );
}

export default App;
