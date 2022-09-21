import React, { useState, useEffect } from "react";
import "./singlecart.css";
import db from "../../Data/firebase";

export default function SingleBook({
  image,
  title,
  price,
  author,
  id,
  reload,
}) {
  const removeFromCart = async () => {
    await db.collection("bookList").doc(id).update({ isInCart: false });
    reload();
  };
  return (
    <div className="single-container">
      <img src={image} />
      <h1>{title}</h1>
      <h3>{author}</h3>
      <h5>Rs.{price}</h5>
      <button onClick={removeFromCart}>
        <h4>Remove</h4>
      </button>
    </div>
  );
}
