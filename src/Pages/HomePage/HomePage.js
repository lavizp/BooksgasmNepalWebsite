import React from "react";
import NavBar from "../../Components/Navbar/NavBar";
import BannerMain from "../../Components/Banners/BannerMain";
import BookList from "../../Components/BookList/BookList";
import CatogeryList from "../../Components/CatogeryList/CatogeryList";
import "./homepage.css";
import bookListData from "../../Data/BookList.json";

export default function HomePage() {
  const bestSeller = () => {};
  return (
    <>
      <BannerMain />
      <div id="startshopping">
        <NavBar />
        <BookList title="BestSeller" />
      </div>
      <CatogeryList />
      <BookList title="Recommended" />
    </>
  );
}
