import React from "react";
import "./banner.css";

const Banner = () => {
   return (
      <div className="banner">
         <div className="imageDiv">
            <img
               className="bannerIcon"
               src="https://cdn-icons-png.flaticon.com/512/882/882704.png"
               alt=""
            />
            <p className="bold">iPhone 13</p>
         </div>
         <p className="color">
            Starting from <span className="bold">67,500</span>
         </p>
         <p>
            Flat <span className="bold">10%</span> off +{" "}
            <span className="bold">5,000*</span> cashback
         </p>
      </div>
   );
};

export default Banner;
