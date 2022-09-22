import { Routes, Route } from "react-router-dom";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Pages/HomePage/HomePage";
import SingleBookPage from "./Pages/SingleBookPage/SingleBookPage";
import CatogeriesPage from "./Pages/Catogeries/CatogeriesPage";
import SingleCatogeryPage from "./Pages/Catogeries/SingleCatogeryPage";
import CartPage from "./Pages/CartPage/CartPage";
import AboutUsPage from "./Pages/AboutUsPage";
import Footer from "./Components/Footer/Footer";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignUpPage from "./Pages/SignupPage/SignUpPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/book/:title" element={<SingleBookPage />} />
        <Route path="/catogeries" element={<CatogeriesPage />} />
        <Route path="/catogeries/:catogery" element={<SingleCatogeryPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
