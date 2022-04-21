import React from "react";
import "./home.css";
import image from "../images/aaa.jpg";

const Home = () => {
   return (
      <div className="firstDiv">
         <h1 className="heading">iPhone 13 Pro</h1>
         <p className="subHeading">Oh. So. Pro</p>
         <img className="image" src={image} alt="" />
      </div>
   );
};

export default Home;
