import React from "react";
import "./banner.css";
import BookImage from "./Book.png";
import BookListImage from "./BookPile.jpg";

export default function BannerMain() {
  return (
    <div className="banner-container">
      <img src={BookImage} className="background"></img>
      <img src={BookListImage} className="circle-image" />
      <div className="text">
        <h1>
          Buy Books at
          <br />
          an Affordeble
          <br />
          Rrice
        </h1>
        <a href="#startshopping">
          <button>Start Shopping</button>
        </a>
      </div>
    </div>
  );
}
