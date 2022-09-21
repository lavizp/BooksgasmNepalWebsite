import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./singlebookpage.css";
import NavBar from "../../Components/Navbar/NavBar";
import db from "../../Data/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";

export default function SingleBookPage() {
  const { title } = useParams();
  const [bookListData, setBookListData] = useState([]);
  const usersCollectionRef = collection(db, "bookList");
  const [book, setBook] = useState();
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setBookListData(
        data.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }))
          .filter((data) => data.id == title)
      );
    };

    getUsers();
    setBook(bookListData[0]);
  }, [bookListData]);

  return (
    <>
      <NavBar />
      <h1 className="book_title">{book?.title}</h1>
      <h3 className="book-author">-{book?.author}</h3>

      <div className="singlebook-container">
        <div className="book_data">
          <img src={book?.image} className="book_image"></img>
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
            <h1>Price : Rs{book?.price}</h1>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
