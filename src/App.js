import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Pages/HomePage/HomePage";
import SingleBookPage from "./Pages/SingleBookPage/SingleBookPage";
import CatogeriesPage from "./Pages/Catogeries/CatogeriesPage";
import SingleCatogeryPage from "./Pages/Catogeries/SingleCatogeryPage";
import CartPage from "./Pages/CartPage";
import AboutUsPage from "./Pages/AboutUsPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:title" element={<SingleBookPage />} />
        <Route path="/catogeries" element={<CatogeriesPage />} />
        <Route path="/catogeries/:catogery" element={<SingleCatogeryPage />} />
        <Route path="/:book" element={<SingleBookPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
    </>
  );
}

export default App;
