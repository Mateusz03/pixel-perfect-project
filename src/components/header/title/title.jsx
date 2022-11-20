import React from "react";
import Container from "react-bootstrap/Container";
import "./title.scss";

const Title = () => {
  return (
    <Container className="title-container">
      <h1 className="title">Firma</h1>
      <p className="title-content">
        Lorem ipsum dolor sit amet,
        <br /> consectetur adipiscing elit. Ut auctor
      </p>
    </Container>
  );
};
export default Title;
