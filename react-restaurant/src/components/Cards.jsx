import React from "react";

const Cards = ({ data }) => {
   return (
      <div className="cardBox">
         {data.map((e) => {
            return (
               <div className="card">
                  <div className="upperDiv">
                     <div className="imageDiv">
                        <img src={e.image} alt="" />
                     </div>
                     <div className="dataDiv">
                        <p className="name">{e.name}</p>
                        <p className="greyText">{e.cuisine}</p>
                        <p className="greyText">Cost {e.cost} for one</p>
                        <p className="blackText">Min ₹{e.minPrice}</p>
                        <p className="blackText">{e.paymentMethods}</p>
                     </div>
                     <div className="ratingDiv">
                        <p className="rating">{e.rating}</p>
                        <p className="votes">{e.votes} votes</p>
                        <p className="votes">{e.reviews} reviews</p>
                     </div>
                  </div>
                  <div className="lowerDiv">
                     <p>Order card</p>
                  </div>
               </div>
            );
         })}
      </div>
   );
};

export default Cards;
