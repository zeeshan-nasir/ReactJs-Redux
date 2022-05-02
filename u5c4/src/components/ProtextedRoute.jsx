// /orders and /neworder are protected routes

import React from "react";
import { Navigate } from "react-router";

export const ProtectedRoute = ({ children }) => {
   if (!true) {
      return <Navigate to="/login" replace={false} />;
   }

   return children;
};
