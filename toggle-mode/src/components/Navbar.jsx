import React from "react";
import { ImStatsBars2 } from "react-icons/im";
import { BsSignpost } from "react-icons/bs";
import { GrBasket } from "react-icons/gr";
import { IoMdChatboxes } from "react-icons/io";
import { IoAddCircleSharp } from "react-icons/io5";
import { VscFiles } from "react-icons/vsc";
import { FiSettings } from "react-icons/fi";
import "./navbar.css";

const Navbar = () => {
   return (
      <div className="nav">
         <img
            className="pp"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt=""
         />
         <ImStatsBars2 size={20} />
         <BsSignpost size={20} />
         <GrBasket size={20} />
         <IoMdChatboxes size={20} />
         <VscFiles size={20} />
         <FiSettings size={20} />
         <IoAddCircleSharp
            size={37}
            style={{
               color: "#29CB97",
            }}
            className="add"
         />
      </div>
   );
};

export default Navbar;
