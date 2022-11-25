import React from "react";
import "./gallery.scss";
import { Container } from "react-bootstrap";
import {
  pic1,
  pic2,
  pic3,
  pic4,
} from "../../images/gallery/gallerypictures.jsx";

const Gallery = () => {
  return (
    <Container className="gallery-container">
      <img src={pic1} alt={pic1} className="pic1-gallery" />
      <div className="pic2-pic3-container">
        <img src={pic2} alt={pic2} className="pic2-gallery" />
        <img src={pic3} alt={pic3} className="pic3-gallery" />
      </div>
      <div className="title-gallery-container">
        <h1 className="gallery-title">Galeria</h1>
        <img src={pic4} alt={pic4} className="pic4-gallery" />
      </div>
    </Container>
  );
};
export default Gallery;
