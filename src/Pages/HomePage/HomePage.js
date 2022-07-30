import React from "react";
import NavBar from "../../Components/Navbar/NavBar";
import BannerMain from "../../Components/Banners/BannerMain";
import BookList from "../../Components/BookList/BookList";
import "./homepage.css";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <BannerMain />
      <BookList title="Self Help" />
    </>
  );
}
