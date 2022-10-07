import React, { useState, useEffect, useCallback } from "react";
import NavBar from "../../Components/Navbar/NavBar";
import SingleBook from "../../Components/SingleCart/SingleBook";
import "./cartpage.css";
import Button from "@mui/joy/Button";

import { useUser } from "../../contexts/UserContext";
import { useAuth } from "../../contexts/AuthContext";

export default function CartPage({ bookListData }) {
  const [cartDatas, setCartDatas] = useState([]);
  const [totalPrice, setTotalPrice] = useState(3);

  const { userData } = useUser();
  const { currentUser } = useAuth();

  const getTotalPrice = (arr) => {
    let total = 0;
    if (arr.length == 0) return 0;
    arr.forEach((element) => {
      total += element.price;
    });
    return total;
  };
  const getCartData = useCallback(() => {
    if (!currentUser) return;
    setCartDatas(
      bookListData.map((element) => {
        if (userData.cartData?.includes(element.id.toString())) {
          return element;
        }
      })
    );
  }, []);
  useEffect(() => {
    getCartData();
  }, []);
  useEffect(() => {
    //setTotalPrice(getTotalPrice(cartDatas));
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
            {cartDatas?.map((item) => {
              return (
                <SingleBook
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  author={item.author}
                  price={item.price}
                  reload={getCartData}
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
