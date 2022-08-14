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

export default function SingleBookElement({ title, id, author, price, image }) {
  const [addedToCart, setAddedToCart] = useState(false);
  const [cartDatas, setCartDatas] = useState([]);
  const [cartID, setCartID] = useState();
  const cartData = collection(db, "Cart");
  const addToCart = async () => {
    setAddedToCart(true);

    await addDoc(cartData, {
      title: title,
      image: image,
      author: author,
      price: price,
    }).then((docRef) => {
      setCartID(docRef.id);
    });
  };
  const removeFromCart = async () => {
    setAddedToCart(true);
    const book = doc(db, "Cart", cartID);
    await deleteDoc(book);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(cartData);
      setCartDatas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
    cartDatas.forEach((element) => {
      if (element.title == title) setAddedToCart(true);
    });
  }, [cartDatas]);
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
