import React, { useState } from "react";
import "./singlebook.css";
import db from "../../Data/firebase";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";

export default function SingleBookElement({ title, id, author, price, image }) {
  const [addedToCart, setAddedToCart] = useState(false);
  const [cartID, setCartID] = useState();
  const cartData = collection(db, "Cart");
  const addToCart = async () => {
    await addDoc(cartData, {
      title: title,
      image: image,
      author: author,
      price: price,
    }).then((docRef) => {
      setCartID(docRef.id);
    });
    setAddedToCart(true);
  };
  const removeFromCart = async () => {
    console.log(cartID);
    const book = doc(db, "Cart", cartID);
    await deleteDoc(book);
  };
  return (
    <div className="sisngle-container">
      <img src={image} />
      <h1>{title}</h1>
      <h3>{author}</h3>
      <h5>Rs.{price}</h5>
      {addedToCart ? (
        <button onClick={removeFromCart}>
          <h4>Remove</h4>
        </button>
      ) : (
        <button onClick={addToCart}>
          <h4>Add to Cart</h4>
        </button>
      )}
    </div>
  );
}
