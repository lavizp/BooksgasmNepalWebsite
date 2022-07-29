import React from "react";
import "./navbar.css";
import logo from "./logo.png";
import { FaShoppingCart } from "react-icons/fa";

export default function NavBar() {
  return (
    <div className="navbar-container">
      <a href="" className="Logo">
        <img src={logo} />
        <h1>BooksGasm</h1>
      </a>
      <nav className="menuitems">
        <ul>
          <li>
            <a href="">Catogeries</a>
            <ul className="dropdown-list">
              <li>hello sir</li>
              <li>hello sir</li>
            </ul>
          </li>
          <li>
            <a href="">Combo-Deals</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contacts</a>
          </li>

          <li>
            <a href="">
              <FaShoppingCart color="grey" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
