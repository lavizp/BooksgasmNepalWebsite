import React from "react";
import SingleBookElement from "../SingleBook/SingleBookElement";
import bookListData from "../../Data/BookList.json";
import "./booklist.css";

export default function BookList({ title }) {
  return (
    <>
      <div className="list-title">
        <h1 className="black">{title}</h1> <h1 className="yellow">Books:</h1>
      </div>
      <div className="book-list">
        {bookListData.map((item, index) => (
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
