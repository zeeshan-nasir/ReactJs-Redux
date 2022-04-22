import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
   const { handleAuth } = useContext(AuthContext);

   const navigate = useNavigate();

   return (
      <div
         style={{
            width: "30%",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
            marginTop: "60px",
            border: "1px solid grey",
            paddingBottom: "40px",
         }}
         className="loginForm"
      >
         <h1>Login</h1>
         <input
            style={{
               width: "250px",
               height: "25px",
            }}
            type="text"
            placeholder="Username"
         />
         <input
            style={{
               width: "250px",
               height: "25px",
            }}
            type="password"
            placeholder="Password"
         />
         <button
            style={{
               width: "120px",
               borderRadius: "5px",
               border: "1px solid rgb(50, 50, 51)",
               backgroundColor: "rgb(50, 50, 51)",
               color: "white",
               height: "30px",
               marginTop: "30px",
               cursor: "pointer",
            }}
            onClick={() => {
               handleAuth(true);
               navigate(-2, { replace: true });
            }}
         >
            Login
         </button>
      </div>
   );
};

export default Login;
