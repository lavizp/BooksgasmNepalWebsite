import React, { useState, useEffect } from "react";
import SingleBookElement from "../SingleBook/SingleBookElement";
import "./booklist.css";

import { useAuth } from "../../contexts/AuthContext";

export default function BookList({ title, books }) {
  return (
    <>
      <div className="list-title">
        <h1 className="black">{title}</h1> <h1 className="yellow">Books:</h1>
      </div>
      <div className="book-list">
        {books.map((item, index) => (
          <SingleBookElement
            key={index}
            id={item.id}
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
