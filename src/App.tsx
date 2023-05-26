import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import LoginContainer from "./main/pages/auth/LoginContainer";
import HomePage from "./main/pages/home/HomePage";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route  path="/login" element={<LoginContainer/>} />
          <Route  path="/home" element={<HomePage/>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
