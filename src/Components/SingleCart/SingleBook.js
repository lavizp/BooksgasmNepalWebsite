import React from "react";
import "./singlecart.css";

export default function SingleBook({ image, title, price, author }) {
  return (
    <div className="sisngle-container">
      <img src={image} />
      <h1>{title}</h1>
      <h3>{author}</h3>
      <h5>Rs.{price}</h5>
    </div>
  );
}
