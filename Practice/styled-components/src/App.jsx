import { useState } from "react";
import "./App.css";
import { Buttons } from "./components/Buttons";
import Button from '@mui/material/Button';

function App() {
   const [theme, setTheme] = useState("light");

   return (
      <div className="App">
         <Buttons theme={theme}>Sign up</Buttons>
         <Buttons
            onClick={() => {
               setTheme(theme === "light" ? "dark" : "light");
            }}
         >
            Change Theme
         </Buttons>
         <Button variant="outlined">Outlined</Button>
      </div>
   );
}

export default App;
