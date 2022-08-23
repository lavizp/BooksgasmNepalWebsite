import React, { useState, useEffect } from "react";
import "./singlebook.css";
import db from "../../Data/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
export default function SingleBookElement({ title, id, author, price, image }) {
  const [cartText, setcartText] = useState("Add to Cart");
  const [addedToCart, setAddedToCart] = useState(false);

  const [cartDatas, setCartDatas] = useState([]);
  const [cartID, setCartID] = useState();
  const cartData = collection(db, "Cart");
  const cartButton = async () => {
    if (!addedToCart) {
      setcartText("Adding");
      await addDoc(cartData, {
        title: title,
        image: image,
        author: author,
        price: price,
      }).then((docRef) => {
        setCartID(docRef.id);
      });
      setAddedToCart(true);
      setcartText("Remove");
    } else {
      console.log(cartID);
      setcartText("Removing");

      const book = doc(db, "Cart", cartID);
      await deleteDoc(book);
      setAddedToCart(false);
      setcartText("Add to Cart");
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(cartData);
      setCartDatas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(cartDatas);
    };

    getUsers();
  }, []);
  useEffect(() => {
    if (!addedToCart) {
      cartDatas.forEach((element) => {
        if (element.title == title) {
          setcartText("Remove");
          setAddedToCart(true);
        }
      });
    }
  }, [cartDatas]);
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
