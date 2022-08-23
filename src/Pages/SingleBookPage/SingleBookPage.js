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
      <div className="book_data">
        <h1 className="book_title">{book?.title}</h1>
        <img src={book?.image} className="book_image"></img>
      </div>
    </>
  );
}
