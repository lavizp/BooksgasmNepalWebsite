import React, { useState, useEffect } from "react";
import "./singlecart.css";
import db from "../../Data/firebase";
import { useAuth } from "../../contexts/AuthContext";
import { useUser } from "../../contexts/UserContext";
import firebase from "firebase/compat/app";
import { ChangeAddedToCart } from "../../Services/ChangeAddedToCart";
export default function SingleBook({ image, title, price, author, id }) {
  const { userData, totalItemInCart, SetTotalItemInCart } = useUser();
  const { currentUser } = useAuth();

  const removeFromCart = async () => {
    const { text, added, totalItems } = await ChangeAddedToCart(
      id,
      true,
      totalItemInCart,
      currentUser.uid
    );
    SetTotalItemInCart(totalItems);
    location.reload();
  };
  return (
    <div className="single-container">
      <img src={image} />
      <h1> {title.length < 18 ? title : title.slice(0, 17) + "..."}</h1>
      <h3>{author}</h3>
      <h5>Rs.{price}</h5>
      <button onClick={removeFromCart}>
        <h4>Remove</h4>
      </button>
    </div>
  );
}
