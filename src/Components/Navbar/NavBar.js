import React, { useContext } from "react";
import logo from "./logo.png";
import "./navbar.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { useAuth } from "../../contexts/AuthContext";
import { useUser } from "../../contexts/UserContext";

import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const { currentUser, signOut } = useAuth();
  const { totalItemInCart } = useUser();
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
              <Nav.Link href="/cart">
                cart{currentUser ? ":" + totalItemInCart : ""}
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
