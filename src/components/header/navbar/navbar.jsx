import React from "react";
import Container from "react-bootstrap/Container";
import { Navbar } from "react-bootstrap";
import "./navbar.scss";

const HeaderNavbar = () => {
  return (
    <Navbar bg="transparent" expand="lg">
      <Container>
        <Navbar.Brand className="navbar-logo">Logo</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default HeaderNavbar;
