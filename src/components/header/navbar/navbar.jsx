import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import facebook from "../../../images/header/facebook.svg";
import instagram from "../../../images/header/instagram.svg";
import "./navbar.scss";

const HeaderNavbar = () => {
  return (
    <Navbar bg="transparent" expand="lg" className="navbar-container">
      <Navbar.Brand className="navbar-logo" href="#home">
        LOGO
      </Navbar.Brand>
      <Container className="navbar-list-and-icons">
        <Nav className="links-container">
          <Nav.Link href="#space" className="link">
            Poznaj przestrzeń
          </Nav.Link>
          <Nav.Link href="#offer" className="link">
            Oferta
          </Nav.Link>
          <Nav.Link href="#localization" className="link">
            Lokalizacja
          </Nav.Link>
          <Nav.Link href="#office" className="link">
            Własne biuro
          </Nav.Link>
          <Nav.Link href="#contact" className="link">
            Kontakt
          </Nav.Link>
        </Nav>
        <Nav className="nav-icons-container">
          <img src={facebook} alt="f" />
          <img src={instagram} alt="i" />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default HeaderNavbar;
