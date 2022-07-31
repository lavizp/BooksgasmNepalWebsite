import React from "react";
import SingleBookElement from "../SingleBook/SingleBookElement";
import "./booklist.css";

export default function BookList({ title }) {
  const bookList = [
    {
      title: "Rich Dad Poor Dad",
      author: "Robert Uncle",
      image:
        "https://static-01.daraz.com.np/p/ced0146258dd1eabdce9792d50103e6a.jpg",
      price: "1500",
      catogery: "Self help",
    },
    {
      title: "It Ends with Us",
      author: "Collen Hoover",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1470427482l/27362503._SY475_.jpg",
      price: "1200",
      catogery: "Fiction",
    },
    {
      title: "It Ends with Us",
      author: "Collen Hoover",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1470427482l/27362503._SY475_.jpg",
      price: "1150",
      catogery: "Fiction",
    },
  ];
  return (
    <>
      <div className="list-title">
        <h1 className="black">{title}</h1> <h1 className="yellow">Books:</h1>
      </div>
      <div className="book-list">
        {bookList.map((item, index) => (
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
