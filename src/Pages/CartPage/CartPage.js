import React, { useState, useEffect, useCallback } from "react";
import NavBar from "../../Components/Navbar/NavBar";
import SingleBook from "../../Components/SingleCart/SingleBook";
import "./cartpage.css";
import Button from "@mui/joy/Button";
import useCartData from "../../Hooks/UseCartData";
import { useUser } from "../../contexts/UserContext";
import { useAuth } from "../../contexts/AuthContext";
import db from "../../Data/firebase";
import firebase from "firebase/compat/app";

export default function CartPage({ bookListData }) {
  const { userData, totalItemInCart, SetTotalItemInCart } = useUser();
  const [totalPrice, setTotalPrice] = useState(0);
  const { currentUser } = useAuth();
  const { cartData, getTotalPrice } = useCartData(currentUser, bookListData);
  async function removeFromCart(id) {
    await db
      .collection("users")
      .doc(currentUser.uid.toString())
      .update({
        cartData: firebase.firestore.FieldValue.arrayRemove(id.toString()),
      });
    SetTotalItemInCart(totalItemInCart - 1);
  }
  useEffect(() => {
    setTotalPrice(getTotalPrice(cartData));
  }, [cartData]);

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
            {cartData.map((item) => {
              return (
                <SingleBook
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  author={item.author}
                  price={item.price}
                  reload={removeFromCart}
                />
              );
            })}
          </div>
        )}
        <div className="price-box-cartpage">
          <h1>Your Total is:</h1>
          <h1>Rs. {totalPrice}</h1>
          <Button variant="solid" color="primary">
            CheckOut
          </Button>
        </div>
      </div>
    </>
  );
}
