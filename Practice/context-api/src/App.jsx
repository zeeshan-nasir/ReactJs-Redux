import { useContext } from "react";
import "./App.css";
import Card from "./components/body/Card";
import Navbar from "./components/Navbar";
import { LangContext } from "./contexts/LanguageContext";

function App() {
   const { handleLang } = useContext(LangContext);

   return (
      <div className="App">
         <button onClick={handleLang}>Change language</button>
         <Navbar />
         <Card />
      </div>
   );
}

export default App;
