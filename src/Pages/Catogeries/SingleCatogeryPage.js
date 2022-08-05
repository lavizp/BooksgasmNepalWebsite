import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import db from "../../Data/firebase";
import BookList from "../../Components/BookList/BookList";
import SingleBookElement from "../../Components/SingleBook/SingleBookElement";

export default function SingleCatogeryPage() {
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
  const { catogery } = useParams();
  return (
    <div>
      <h1>{catogery}</h1>
      {bookListData
        .filter((itm) => itm.catogery == catogery)
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
  );
}
