import React, { useState } from "react";
import logo from "./logo.png";
import "./navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavBar() {
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
          <Navbar.Brand href="#home" className="Logo">
            <img src={logo} />
            <h1>BooksGasm</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <NavDropdown title="Catogeries" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Self-Help
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Fiction</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Money</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  All Catogeries
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#features">Combo-Deals</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Contacts</Nav.Link>
              <Nav.Link href="#pricing">
                <FaShoppingCart />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}