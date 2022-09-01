import React, { useState, useEffect } from "react";
import NavBar from "../../Components/Navbar/NavBar";
import SingleBook from "../../Components/SingleCart/SingleBook";
import db from "../../Data/firebase";
import { collection, getDocs } from "firebase/firestore";
import "./cartpage.css";

export default function CartPage() {
  const [cartDatas, setCartDatas] = useState([]);
  const [totalPrice, SetTotalPrice] = useState(0);
  const cartDatabase = collection(db, "Cart");
  const getUsers = async () => {
    const data = await getDocs(cartDatabase);
    setCartDatas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    let tempTotal = getTotalPrice(cartDatas);
    SetTotalPrice(tempTotal);
  };
  useEffect(() => {
    getUsers();
  }, []);
  const getTotalPrice = (arr) => {
    let total = 0;
    if (arr.length == 0) return 0;
    arr.forEach((element) => {
      total += element.price;
    });
    return total;
  };
  return (
    <>
      <NavBar />
      <div className="cartpage-container">
        <div className="book-list-cartpage">
          {cartDatas.map((item, index) => {
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
        <div className="price-box-cartpage">data is {totalPrice}</div>
      </div>
    </>
  );
}
