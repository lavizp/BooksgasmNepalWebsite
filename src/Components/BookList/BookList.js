import React from "react";
import SingleBookElement from "../SingleBook/SingleBookElement";
import "./booklist.css";

export default function BookList({ title }) {
  const bookList = [
    {
      title: "Rich Dad Poor Bau",
      author: "Robert Uncle",
      price: "1500",
      catogery: "Self help",
    },
    {
      title: "Rich Dad Poor Bau",
      author: "Robert Uncle",
      price: "1500",
      catogery: "Self help",
    },
  ];
  return (
    <>
      <div className="list-title">
        <h1 className="black">{title}</h1> <h1 className="yellow">Books</h1>
      </div>
      <div className="book-list">
        {bookList.map((item, index) => (
          <SingleBookElement
            key={index}
            title={item.title}
            author={item.author}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
}
