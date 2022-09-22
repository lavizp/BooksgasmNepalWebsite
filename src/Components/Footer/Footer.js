import React from "react";
import "./footer.css";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-container">
      <h1>BooksGasm Nepal</h1>
      <div className="socialmedia-icons">
        <Link to="/asd">
          <FaFacebookSquare id="icon" size={50} color="white" />
        </Link>
        <Link to="/asd">
          <FaInstagramSquare id="icon" size={50} color="white" />
        </Link>
      </div>
    </div>
  );
}
