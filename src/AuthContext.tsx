import React from "react";
import { createContext, useContext } from "react";
import { Navigate } from "react-router-dom";

type AuthContextType = {
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType>({ isAuthenticated: false });

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const authToken = window.localStorage.getItem("auth_token");

  const isAuthenticated =
    authToken !== null && authToken !== "null" && authToken !== ""
      ? true
      : false;
  console.log(window.localStorage.getItem("auth_token"));
  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {<Navigate to = {isAuthenticated? "/" : "/login"}/>}
      {children}
    </AuthContext.Provider>
  );
};
