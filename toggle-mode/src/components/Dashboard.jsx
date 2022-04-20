import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Cards from "./Cards";
import "./dashboard.css";

const Dashboard = ({ isDarkMode }) => {
   const { toggleTheme } = useContext(ThemeContext);

   return (
      <div className={isDarkMode === false ? "dash" : "darkDash"}>
         <div className="heading">
            <h1>My Dashboard</h1>
            <div className="headingToggle">
               <span className="sub">Dark Mode</span>
               <label className="switch">
                  <input type="checkbox" onChange={() => toggleTheme()} />
                  <span className="slider round"></span>
               </label>
            </div>
         </div>
         <div  className={isDarkMode === false ? "cardDiv" : "darkCardDiv"}>
            <div className="upperDiv">
               <h3>Active Users</h3>
               <p>for August 2022</p>
            </div>
            <div>
               <Cards
                  isDarkMode={isDarkMode}
                  image={
                     "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  }
                  name={"Sarah Palin"}
                  level={15}
                  points={4723}
               />
               <Cards
                  isDarkMode={isDarkMode}
                  image={
                     "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  name={"Andrew Paul"}
                  level={11}
                  points={2520}
               />
               <Cards
                  isDarkMode={isDarkMode}
                  image={
                     "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  name={"Michelle Swift"}
                  level={6}
                  points={1697}
               />
            </div>
         </div>
      </div>
   );
};

export default Dashboard;
