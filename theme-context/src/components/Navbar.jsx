import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import "./navbar.css";

const Navbar = () => {
   const { theme, toggleTheme } = useContext(ThemeContext);
   // console.log(theme);

   return (
      <div className="nav" style={theme}>
         <button onClick={() => toggleTheme()}>
            {theme.color === "black" ? "Dark Mode" : "Light Mode"}
         </button>
      </div>
   );
};

export default Navbar;
