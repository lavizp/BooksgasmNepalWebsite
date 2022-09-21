import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import db from "../../Data/firebase";
import { getDocs, collection } from "firebase/firestore";

import BookList from "../../Components/BookList/BookList";
import NavBar from "../../Components/Navbar/NavBar";
import "./catogeriespage.css";
export default function SingleCatogeryPage() {
  const [bookListData, setBookListData] = useState([]);
  const usersCollectionRef = collection(db, "bookList");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setBookListData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);
  const { catogery } = useParams();
  const catogeryTitle = catogery.charAt(0).toUpperCase() + catogery.slice(1);
  return (
    <>
      <NavBar />

      <div className="page-container">
        <BookList
          title={catogeryTitle}
          books={bookListData.filter((itm) => itm.catogery == catogery)}
        />
      </div>
    </>
  );
}
