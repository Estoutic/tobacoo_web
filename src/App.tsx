import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import LoginContainer from "./main/pages/auth/LoginContainer";
import HomePage from "./main/pages/home/HomePage";
import ProductPage from "./main/pages/product/ProductPage";
import Account from "./main/pages/profile/Account";

function App() {

  // const { categories } = useContext(ProductContext);

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route  path="/login" element={<LoginContainer/>} />
          <Route  path="/" element={<HomePage/>} />
          <Route  path="/account" element={<Account/>} />
          <Route path="/:id" element={<ProductPage />} />

          {/* {categories.map((category) => (
              <Route
                key={category.id}
                path= {`/${category.customId}`}
                element={<ProductPage />}
              />
            ))} */}
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
