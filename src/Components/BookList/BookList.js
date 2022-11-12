import React, { useState, useEffect } from "react";
import SingleBookElement from "../SingleBook/SingleBookElement";
import "./booklist.css";

export default function BookList({ title, books }) {
  return (
    <div className="bookListContainer">
      <div className="list-title">
        <h1 className="black">{title}</h1> <h1 className="yellow">Books:</h1>
      </div>
      <div className="book-list">
        {books.slice(0, 6).map((item) => (
          <SingleBookElement
            key={item.id}
            id={item.id}
            title={item.title}
            author={item.author}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}
