import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
   const { handleAuth } = useContext(AuthContext);

   const navigate = useNavigate();

   return (
      <div
         style={{
            width: "40%",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "20px",
         }}
      >
         <input type="text" placeholder="username" />
         <input type="text" placeholder="password" />
         <button
            onClick={() => {
               handleAuth(true);
               navigate(-2, { replace: true });
            }}
         >
            Log in
         </button>
         <button
            onClick={() => {
               handleAuth(false);
               navigate("/login");
            }}
         >
            Log out
         </button>
      </div>
   );
};

export default Login;
