import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./singlebookpage.css";
import NavBar from "../../Components/Navbar/NavBar";

export default function SingleBookPage({ bookListData }) {
  const { title } = useParams();

  const [book, setBook] = useState();
  useEffect(() => {
    bookListData.filter((data) => data.id == title);
  }, [bookListData]);

  return (
    <>
      <NavBar />
      <h1 className="book_title">{bookListData?.title}</h1>
      <h3 className="book-author">-{bookListData?.author}</h3>

      <div className="singlebook-container">
        <div className="book_data">
          <img src={bookListData?.image} className="book_image"></img>
        </div>
        <div className="book-description">
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
          <div className="singlebook-pricebox">
            <h1>Price : Rs{bookListData?.price}</h1>
            <button>{bookListData?.isInCart ? "Remove" : "Add to Cart"}</button>
          </div>
        </div>
      </div>
    </>
  );
}
