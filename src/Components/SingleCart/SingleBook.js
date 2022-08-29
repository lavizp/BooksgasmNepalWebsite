import React, { useState, useEffect } from "react";
import "./singlecart.css";
import db from "../../Data/firebase";
import { collection, deleteDoc, doc } from "firebase/firestore";

export default function SingleBook({
  image,
  title,
  price,
  author,
  id,
  reload,
}) {
  const [addedToCart, setAddedToCart] = useState(false);
  const [cartDatas, setCartDatas] = useState([]);
  const cartData = collection(db, "Cart");
  const removeFromCart = async () => {
    const book = doc(db, "Cart", id);
    await deleteDoc(book);
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
