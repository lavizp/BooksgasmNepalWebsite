import React from "react";
import "./singlebook.css";

export default function SingleBookElement({ title, author, price }) {
  return (
    <div className="sisngle-container">
      <img src="https://static-01.daraz.com.np/p/ced0146258dd1eabdce9792d50103e6a.jpg" />
      <h1>{title}</h1>
      <h3>{author}</h3>
      <h5>Rs.{price}</h5>
      <button>
        <h4>Add to Cart</h4>
      </button>
    </div>
  );
}
