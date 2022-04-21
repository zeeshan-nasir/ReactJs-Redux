import React from "react";
import "./navbar.css";
import NavbarLinks from "./NavbarLinks";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
   return (
      <div className="navbar">
         <Link to={"/"}>
            <img
               className="icon"
               src="https://cdn-icons-png.flaticon.com/512/882/882704.png"
               alt=""
            />
         </Link>
         <NavbarLinks />
         <BsBag size={15} style={{ color: "rgb(214, 214, 216)" }} />
      </div>
   );
};

export default Navbar;
