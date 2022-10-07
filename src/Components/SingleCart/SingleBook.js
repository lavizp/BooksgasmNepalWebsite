import React, { useState, useEffect } from "react";
import "./singlecart.css";

import { useAuth } from "../../contexts/AuthContext";

export default function SingleBook({
  image,
  title,
  price,
  author,
  id,
  reload,
}) {
  const { currentUser } = useAuth();
  const removeFromCart = async () => {
    reload(id);
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
