import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

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

import { GetBookData } from "./Services/GetBookData";

export const CartItemsContext = React.createContext();
function App() {
  const [bookListData, setBookListData] = useState([]);
  const [totalItemInCart, SetTotalItemInCart] = useState(0);

  const getTotalItems = (arr) => {
    arr.forEach((element) => {
      if (element.isInCart == true) {
        SetTotalItemInCart((total) => total + 1);
      }
    });
  };
  useEffect(() => {
    const getBooks = async () => {
      const data = await GetBookData();
      setBookListData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getBooks();
    getTotalItems(bookListData);
  }, []);

  useEffect(() => {
    getTotalItems(bookListData);
  }, [bookListData]);

  return (
    <>
      <CartItemsContext.Provider
        value={{ totalItemInCart, SetTotalItemInCart }}
      >
        <Routes>
          <Route path="/" element={<HomePage bookListData={bookListData} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/book/:title" element={<SingleBookPage />} />
          <Route path="/catogeries" element={<CatogeriesPage />} />
          <Route
            path="/catogeries/:catogery"
            element={<SingleCatogeryPage />}
          />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>
        <Footer />
      </CartItemsContext.Provider>
    </>
  );
}

export default App;
