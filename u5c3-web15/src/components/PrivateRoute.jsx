import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const PrivateRoute = ({ children }) => {
   const { isAuth } = useContext(AuthContext);

   if (!isAuth) {
      return <Navigate to={"/login"} replace={false} />;
   }

   return children;
};
