import React, { useState, useEffect } from "react";
import db from "../../Data/firebase";

import NavBar from "../../Components/Navbar/NavBar";
import BannerMain from "../../Components/Banners/BannerMain";
import BookList from "../../Components/BookList/BookList";
import CatogeryList from "../../Components/CatogeryList/CatogeryList";
import "./homepage.css";

export default function HomePage() {
  const [bookListData, setBookListData] = useState([]);

  useEffect(() => {
    db.collection("bookList").onSnapshot((snapshot) => {
      setBookListData([]);
      snapshot.forEach((element) => {
        var data = element.data();

        setBookListData((arr) => [...arr, data]);
      });
    });
  }, []);

  return (
    <>
      <BannerMain />
      <div id="startshopping" />
      <NavBar />
      <BookList title="BestSeller" books={bookListData} />
      <CatogeryList />
      <BookList title="Recommended" books={bookListData} />
    </>
  );
}
