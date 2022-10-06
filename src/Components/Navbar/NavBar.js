import React, { useContext } from "react";
import logo from "./logo.png";
import "./navbar.css";
import { IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CartItemsContext } from "../../App";

import { useAuth } from "../../contexts/AuthContext";

import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const { totalItemInCart, SetTotalItemInCart } = useContext(CartItemsContext);
  const { currentUser, signOut } = useAuth();
  function signOutHandler() {
    signOut();
  }
  const navigate = useNavigate();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="/" className="Logo">
            <img src={logo} />
            <h1>BooksGasm</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <NavDropdown title="Catogeries" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/catogeries/self-help">
                  Self-Help
                </NavDropdown.Item>
                <NavDropdown.Item href="/catogeries/fiction">
                  Fiction
                </NavDropdown.Item>
                <NavDropdown.Item href="/catogeries/money">
                  Money
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/catogeries">
                  All Catogeries
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#features">Combo-Deals</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="#pricing">Contacts</Nav.Link>
              <Nav.Link href="/cart">
                <IconButton aria-label="cart">
                  <Badge badgeContent={totalItemInCart} color="primary">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </Nav.Link>
              {currentUser ? (
                <button onClick={() => signOutHandler()}>Sign Out</button>
              ) : (
                <button onClick={() => navigate("/login")}>Sign In</button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
