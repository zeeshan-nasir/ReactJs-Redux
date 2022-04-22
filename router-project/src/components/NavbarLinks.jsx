import React from "react";
import { Link } from "react-router-dom";

const NavbarLinks = () => {
   const links = [
      {
         title: "Store",
         to: "store",
      },
      {
         title: "Mac",
         to: "mac",
      },
      {
         title: "iPad",
         to: "iPad",
      },
      {
         title: "iPhone",
         to: "iPhone",
      },
      {
         title: "About Us",
         to: "about",
      },
      {
         title: "Login",
         to: "login",
      },
   ];
   return (
      <div>
         {links.map((e, i) => {
            return (
               <Link className="links" key={i} to={e.to}>
                  {e.title}
               </Link>
            );
         })}
      </div>
   );
};

export default NavbarLinks;
