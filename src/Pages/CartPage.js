import React, { useState, useEffect } from "react";
import NavBar from "../Components/Navbar/NavBar";
import CartBookList from "../Components/CartBookLists/CartBookList";

export default function CartPage() {
  return (
    <>
      <NavBar />
      {<CartBookList />}
    </>
  );
}
