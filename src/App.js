import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import bookListDataTemp from "./MOCK_DATA.json";

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

function App() {
  const [bookListData, setBookListData] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      const data = await GetBookData();
      setBookListData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getBooks();
  }, []);

  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<HomePage bookListData={bookListData} />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/book/:title"
          element={<SingleBookPage bookListData={bookListData} />}
        />
        <Route path="/catogeries" element={<CatogeriesPage />} />
        <Route
          path="/catogeries/:catogery"
          element={<SingleCatogeryPage bookListData={bookListData} />}
        />
        <Route
          path="/cart"
          element={<CartPage bookListData={bookListData} />}
        />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
