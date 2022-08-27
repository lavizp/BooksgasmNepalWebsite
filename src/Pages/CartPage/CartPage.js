import React, { useState, useEffect } from "react";
import NavBar from "../../Components/Navbar/NavBar";
import CartBookList from "../../Components/CartBookLists/CartBookList";
import db from "../../Data/firebase";
import { collection, getDocs } from "firebase/firestore";
import "./cartpage.css";

export default function CartPage() {
  const [cartDatas, setCartDatas] = useState([]);
  const [totalPrice, SetTotalPrice] = useState(0);
  const cartData = collection(db, "Cart");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(cartData);
      setCartDatas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);
  useEffect(() => {
    getTotalPrice();
  }, [cartDatas]);

  const getTotalPrice = () => {
    cartDatas.forEach((element) => {
      SetTotalPrice(totalPrice + parseInt(element.price));
      console.log(totalPrice);
    });
  };
  return (
    <>
      <NavBar />
      <div className="cartpage-container">
        <div className="book-list-cartpage">{<CartBookList />}</div>
        <div className="price-box-cartpage">data is {totalPrice}</div>
      </div>
    </>
  );
}