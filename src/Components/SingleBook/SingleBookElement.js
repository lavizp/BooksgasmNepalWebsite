import React, { useState, useEffect, useContext } from "react";
import "./singlebook.css";
import db from "../../Data/firebase";
import { useNavigate } from "react-router-dom";
import { CartItemsContext } from "../../App";
export default function SingleBookElement({
  title,
  id,
  author,
  price,
  image,
  isInCart,
}) {
  const [cartText, setcartText] = useState("Add to Cart");
  const [addedToCart, setAddedToCart] = useState(false);
  const { totalItemInCart, SetTotalItemInCart } = useContext(CartItemsContext);
  const cartButton = async () => {
    if (!addedToCart) {
      setcartText("Adding");
      await db.collection("bookList").doc(id).update({ isInCart: true });

      setAddedToCart(true);
      setcartText("Remove");
      SetTotalItemInCart(totalItemInCart + 1);
    } else {
      setcartText("Removing");
      await db.collection("bookList").doc(id).update({ isInCart: false });
      setcartText("Add to Cart");
      setAddedToCart(false);
      SetTotalItemInCart(totalItemInCart - 1);
    }
  };
  useEffect(() => {
    setAddedToCart(isInCart);
    setcartText(isInCart ? "Remove" : "Add to Cart");
  }, []);
  let navigate = useNavigate();

  const navigateToSingleBook = () => {
    navigate("/book/" + id);
  };
  return (
    <div className="sisngle-container">
      <img src={image} onClick={navigateToSingleBook} />
      <h1 onClick={navigateToSingleBook}>
        {title.length < 18 ? title : title.slice(0, 15) + "..."}
      </h1>
      <h3>{author}</h3>
      <h5>Rs.{price}</h5>
      <button onClick={cartButton}>
        <h4>{cartText}</h4>
      </button>
    </div>
  );
}
