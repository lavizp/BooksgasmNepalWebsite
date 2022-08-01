import React from "react";
import { useParams } from "react-router-dom";
import "./singlebookpage.css";
import NavBar from "../../Components/Navbar/NavBar";
export default function SingleBookPage() {
  const { title } = useParams();
  return (
    <>
      <NavBar />
      <h1>{title}</h1>
    </>
  );
}
