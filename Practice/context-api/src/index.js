import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CartContextProvider } from "./contexts/CartContext";
import { LangContextProvider } from "./contexts/LanguageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <LangContextProvider>
         <CartContextProvider>
            <App />
         </CartContextProvider>
      </LangContextProvider>
   </React.StrictMode>
);
