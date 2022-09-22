import React, { useState, useEffect } from "react";
import NavBar from "../../Components/Navbar/NavBar";
import BannerMain from "../../Components/Banners/BannerMain";
import BookList from "../../Components/BookList/BookList";
import CatogeryList from "../../Components/CatogeryList/CatogeryList";
import "./homepage.css";

import { GetBookData } from "../../Services/GetBookData";

export default function HomePage() {
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
      <BannerMain />
      <div id="startshopping" />
      <NavBar />
      <BookList title="BestSeller" books={bookListData} />
      <CatogeryList />
      <BookList title="Recommended" books={bookListData} />
    </>
  );
}
