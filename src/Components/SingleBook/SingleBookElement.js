import React, { useState, useEffect, useContext } from "react";
import db from "../../Data/firebase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useUser } from "../../contexts/UserContext";
import firebase from "firebase/compat/app";
import "./singlebook.css";
import { ChangeAddedToCart } from "../../Services/ChangeAddedToCart";
import { Add } from "@mui/icons-material";
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
    addedToCart ? setcartText("Removing") : setcartText("Adding to Cart");
    const { text, added, totalItems } = await ChangeAddedToCart(
      id,
      addedToCart,
      totalItemInCart,
      currentUser.uid
    );
    setcartText(text);
    setAddedToCart(added);
    SetTotalItemInCart(totalItems);
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
    <div className="sisngle-containe">
      <img
        src={image}
        onClick={navigateToSingleBook}
        alt=""
        style={{ width: "192px", height: "300px" }}
      />
      <h5 onClick={navigateToSingleBook}>
        {title.length < 18 ? title : title.slice(0, 13) + "..."}
      </h5>
      <div>
        <div>
          <p>{author}</p>
          <p>Rs.{price}</p>
        </div>
        <button className="addToCartButton" onClick={cartButton}>
          <p>{cartText}</p>
        </button>
      </div>
    </div>
  );
}
