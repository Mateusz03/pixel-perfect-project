import React from "react";
import "./footer.scss";
import { Container } from "react-bootstrap";
import logo from "../../images/footer/logo_adream.png";
import img from "../../images/footer/img.png";

const Footer = () => {
  return (
    <Container className="footer-container">
      <img src={img} alt={img} className="footer-image" />
      <div className="footer-title">logo</div>
      <main className="footer-main">
        <div style={{ marginRight: "10%" }}>
          <p className="footer-text">
            ul.Towarowa 5/6 <br />
            31-000 Kraków
          </p>
          <p className="footer-contact">
            +48 999 999 999
            <br />
            email@email.com
          </p>
        </div>
        <div className="footer-text">
          <p>Strona główna</p>
          <p>Poznaj przestrzeń</p>
          <p>Oferta</p>
        </div>
        <div className="footer-text">
          <p>Lokalizacja</p>
          <p>Własne biuro</p>
          <p>Kontakt</p>
        </div>
      </main>
      <footer className="footer-footer">
        <p>Polityka prywatności</p>
        <p>
          Poudly designed by <img src={logo} alt="logo" />
        </p>
      </footer>
    </Container>
  );
};
export default Footer;
