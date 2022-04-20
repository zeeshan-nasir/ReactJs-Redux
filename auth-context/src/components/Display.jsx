import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Display = () => {
   const { isAuth, token } = useContext(AuthContext);

   return (
      <div
         style={{
            display: "flex",
            justifyContent: "center",
            gap: "150px",
            fontSize: "1.4em",
         }}
      >
         <p>Status: {isAuth === "Login" ? "Logged Out" : "Logged In"}</p>
         <p>Token: {token}</p>
      </div>
   );
};

export default Display;
