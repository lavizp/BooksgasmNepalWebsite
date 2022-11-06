import React, { useState, useEffect, useCallback } from "react";
import NavBar from "../../Components/Navbar/NavBar";
import SingleBook from "../../Components/SingleCart/SingleBook";
import "./cartpage.css";
import useCartData from "../../Hooks/UseCartData";

import { useUser } from "../../contexts/UserContext";

import { useAuth } from "../../contexts/AuthContext";

import db from "../../Data/firebase";
import firebase from "firebase/compat/app";

export default function CartPage({ bookListData }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const { currentUser } = useAuth();
  const { cartDatas, getTotalPrice } = useCartData(currentUser, bookListData);
  useEffect(() => {
    setTotalPrice(getTotalPrice(cartDatas));
  }, [cartDatas]);

  return (
    <>
      <NavBar />

      <div className="cartpage-container">
        {totalPrice == 0 ? (
          <div className="no-cart-books">
            <h1>No books Added to the Cart</h1>
          </div>
        ) : (
          <div className="book-list-cartpage">
            {cartDatas.map((item) => {
              return (
                <SingleBook
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  author={item.author}
                  price={item.price}
                />
              );
            })}
          </div>
        )}
        <div className="price-box-cartpage">
          <h1>Your Total is:</h1>
          <h1>Rs. {totalPrice}</h1>
          <button>CheckOut</button>
        </div>
      </div>
    </>
  );
}
