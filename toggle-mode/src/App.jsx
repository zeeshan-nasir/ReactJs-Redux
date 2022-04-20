import { useContext } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
   const { isDarkMode } = useContext(ThemeContext);

   return (
      <div className="App">
         <Navbar isDarkMode={isDarkMode} />
         <Dashboard isDarkMode={isDarkMode} />
      </div>
   );
}

export default App;
