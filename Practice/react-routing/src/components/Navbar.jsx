import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
   const links = [
      {
         title: "Home",
         to: "/",
      },
      {
         title: "About Us",
         to: "/about",
      },
      {
         title: "Users",
         to: "/users",
      },
   ];

   return (
      <div>
         {links.map((e, i) => {
            return (
               <Link key={i} to={e.to} style={{ margin: "5px" }}>
                  {e.title}
               </Link>
            );
         })}
      </div>
   );
};

export default Navbar;
