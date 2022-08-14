import React, { useState, useEffect } from "react";
import db from "../../Data/firebase";

import { getDocs, collection } from "firebase/firestore";

import NavBar from "../../Components/Navbar/NavBar";
import BannerMain from "../../Components/Banners/BannerMain";
import BookList from "../../Components/BookList/BookList";
import CatogeryList from "../../Components/CatogeryList/CatogeryList";
import "./homepage.css";

export default function HomePage() {
  const [bookListData, setBookListData] = useState([]);
  const usersCollectionRef = collection(db, "bookList");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setBookListData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <>
      <BannerMain />
      <div id="startshopping" />
      <NavBar />
      <BookList title="BestSeller" books={bookListData} />
      <CatogeryList />
      <BookList title="Recommended" books={bookListData} />
    </>
  );
}
