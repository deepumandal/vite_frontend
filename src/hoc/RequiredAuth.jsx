import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  const { isAuth } = useSelector((state) => state.auth.data);


  if (isAuth) return children;
  return <Navigate to={"/login"} />;
};

export default RequiredAuth;