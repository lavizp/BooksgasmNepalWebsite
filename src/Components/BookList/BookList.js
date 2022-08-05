import React, { useState, useEffect } from "react";
import SingleBookElement from "../SingleBook/SingleBookElement";
import db from "../../Data/firebase";
import "./booklist.css";

export default function BookList({ title }) {
  const [bookListData, setBookListData] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  useEffect(() => {
    db.collection("bookList").onSnapshot((snapshot) => {
      setBookListData([]);
      snapshot.forEach((element) => {
        var data = element.data();

        setBookListData((arr) => [...arr, data]);
      });
    });
  }, []);

  console.log(bookListData);
  console.log(bestSellers);

  return (
    <>
      <div className="list-title">
        <h1 className="black">{title}</h1> <h1 className="yellow">Books:</h1>
      </div>
      <div className="book-list">
        {bookListData
          .filter((itm) => itm.price <= 1400)
          .map((item, index) => (
            <SingleBookElement
              key={index}
              title={item.title}
              author={item.author}
              price={item.price}
              image={item.image}
            />
          ))}
      </div>
    </>
  );
}
