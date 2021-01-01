import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
          <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/cart"><i className="fas fa-shopping-cart"/> Cart</Nav.Link>
          <Nav.Link href="/login"><i className="fas fa-user" /> Sign In</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
