import React, { useState, useEffect } from "react";
import NavBar from "../../Components/Navbar/NavBar";
import SingleBook from "../../Components/SingleCart/SingleBook";
import db from "../../Data/firebase";
import { collection, getDocs } from "firebase/firestore";
import "./cartpage.css";

export default function CartPage() {
  const [cartDatas, setCartDatas] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const getTotalPrice = (arr) => {
    let total = 0;
    if (arr.length == 0) return 0;
    arr.forEach((element) => {
      total += element.price;
    });
    return total;
  };
  const bookData = collection(db, "bookList");
  const getUsers = async () => {
    const data = await getDocs(bookData);
    setCartDatas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getUsers();
    setTotalPrice(getTotalPrice(cartDatas));
  }, []);
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
            {cartDatas
              .filter((item) => {
                return item.isInCart == true;
              })
              .map((item, index) => {
                return (
                  <SingleBook
                    key={index}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    author={item.author}
                    price={item.price}
                    reload={getUsers}
                  />
                );
              })}
          </div>
        )}
        <div className="price-box-cartpage">data is {totalPrice}</div>
      </div>
    </>
  );
}
