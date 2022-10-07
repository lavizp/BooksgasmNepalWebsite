import React, { useState, useEffect, useContext } from "react";
import db from "../../Data/firebase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useUser } from "../../contexts/UserContext";
import firebase from "firebase/compat/app";

export default function SingleBookElement({ title, id, author, price, image }) {
  const [cartText, setcartText] = useState("Add to Cart");
  const [addedToCart, setAddedToCart] = useState(false);
  const navigate = useNavigate();

  const { currentUser } = useAuth();
  const { userData, totalItemInCart, SetTotalItemInCart } = useUser();

  const cartButton = async () => {
    if (!currentUser) {
      navigate("/signup");
      return;
    }
    if (!addedToCart) {
      setcartText("Adding");
      await db
        .collection("users")
        .doc(currentUser.uid.toString())
        .update({
          cartData: firebase.firestore.FieldValue.arrayUnion(id.toString()),
        });
      setAddedToCart(true);
      setcartText("Remove");
      SetTotalItemInCart(totalItemInCart + 1);
    } else {
      setcartText("Removing");
      await db
        .collection("users")
        .doc(currentUser.uid.toString())
        .update({
          cartData: firebase.firestore.FieldValue.arrayRemove(id.toString()),
        });
      setcartText("Add to Cart");
      setAddedToCart(false);
      SetTotalItemInCart(totalItemInCart - 1);
    }
  };
  useEffect(() => {
    if (userData.cartData?.includes(id)) {
      setcartText("Remove");
      setAddedToCart(true);
    } else {
      setcartText("Add to Cart");
      setAddedToCart(false);
    }
  }, []);

  const navigateToSingleBook = () => {
    navigate("/book/" + id);
  };
  return (
    <div style={{ "margin-right": "20px" }}>
      <img
        src={image}
        onClick={navigateToSingleBook}
        alt=""
        style={{ width: "100%", height: "300px" }}
      />
      <h5 onClick={navigateToSingleBook}>
        {title.length < 18 ? title : title.slice(0, 17) + "..."}
      </h5>
      <div>
        <div>
          <p>{author}</p>
          <p>Rs.{price}</p>
        </div>
        <button style={{ width: "100%" }} onClick={cartButton}>
          <p>{cartText}</p>
        </button>
      </div>
    </div>
  );
}
