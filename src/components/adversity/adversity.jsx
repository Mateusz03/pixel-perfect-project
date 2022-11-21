import "./adversity.scss";
import React from "react";
import { Container } from "react-bootstrap";

const Adversity = () => {
  return (
    <Container className="adversity-container">
      <div className="adversity-background"></div>
      <div className="adversity-lines-background"></div>
      <div className="adversity-text">
        Lorem ipsum
        <br /> vs własne biuro
      </div>
      <div className="adversity-underline"></div>
    </Container>
  );
};
export default Adversity;
