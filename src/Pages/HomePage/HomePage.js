import React, { useState, useEffect } from "react";
import NavBar from "../../Components/Navbar/NavBar";
import BannerMain from "../../Components/Banners/BannerMain";
import BookList from "../../Components/BookList/BookList";
import CatogeryList from "../../Components/CatogeryList/CatogeryList";
import "./homepage.css";

export default function HomePage({ bookListData }) {
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
