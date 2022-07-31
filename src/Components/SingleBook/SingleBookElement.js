import React from "react";
import "./singlebook.css";

export default function SingleBookElement({ title, author, price, image }) {
  return (
    <div className="sisngle-container">
      <img src={image} />
      <h1>{title}</h1>
      <h3>{author}</h3>
      <h5>Rs.{price}</h5>
      <button>
        <h4>Add to Cart</h4>
      </button>
    </div>
  );
}
