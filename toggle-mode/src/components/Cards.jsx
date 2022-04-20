import React from "react";
import { BsThreeDots } from "react-icons/bs";
import "./cards.css";

const Cards = ({ image, name, level, points }) => {
   return (
      <div className="card">
         <div className="upper">
            <div className="imageDiv">
               <img src={image} alt="" />
               <div className="textDiv">
                  <p>{name}</p>
                  <p className="font">Banglore, India</p>
               </div>
            </div>
            <BsThreeDots />
         </div>
         <div className="colorBar"></div>
         <div className="btmDiv">
            <p>Proffessional Level {level}</p>
            <p>{points} Points</p>
         </div>
      </div>
   );
};

export default Cards;
