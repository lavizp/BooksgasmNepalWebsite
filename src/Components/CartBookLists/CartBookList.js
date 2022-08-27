import React, { useState, useEffect } from "react";
import "./cartbooklist.css";
import SingleBook from "../SingleCart/SingleBook";
import db from "../../Data/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function CartBookList() {
  const [cartDatas, setCartDatas] = useState([]);
  const cartData = collection(db, "Cart");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(cartData);
      setCartDatas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);
  return (
    <>
      {cartDatas.map((item, index) => (
        <SingleBook
          key={index}
          id={item.id}
          image={item.image}
          title={item.title}
          author={item.author}
          price={item.price}
        />
      ))}
    </>
  );
}
