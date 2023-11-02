import React from "react";
import { Navigate } from "react-router-dom";
import Main from "../components/Main";

const useAuth = () => {
  const isLoggedIn = localStorage.getItem("LoggedIn");
  return isLoggedIn === "true";
};

const Protect = () => {
  const isAuth = useAuth();
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return <Main />;
};

export default Protect;
