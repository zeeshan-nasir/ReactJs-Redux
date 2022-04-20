import { createContext, useState } from "react";

const LangContext = createContext();

const LangContextProvider = ({ children }) => {
   const [lang, setLang] = useState("en");

   const handleLang = () => {
      setLang(lang === "en" ? "hi" : "en");
   };

   return (
      <LangContext.Provider value={{ lang, handleLang }}>
         {children}
      </LangContext.Provider>
   );
};

export { LangContext, LangContextProvider };
