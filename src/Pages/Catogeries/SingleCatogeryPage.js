import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import db from "../../Data/firebase";
import BookList from "../../Components/BookList/BookList";
import NavBar from "../../Components/Navbar/NavBar";
import "./catogeriespage.css";
export default function SingleCatogeryPage() {
  const [bookListData, setBookListData] = useState([]);
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
