import React, { useState } from "react";
import "./offer.scss";
import { Container } from "react-bootstrap";
import pic1 from "../../images/offer/pic1.png";
import pic2 from "../../images/offer/pic2.png";
import pic3 from "../../images/offer/pic3.png";
import pic4 from "../../images/offer/pic4.png";
import OfferArrow from "../../images/offer/arrow";
const IndividualOffer = (props) => {
  const [isHover, setHover] = useState(false);

  const buttonStyle = {
    background: " linear-gradient(to right, black 50%, white 50%)",
    backgroundSize: " 200% 100%",
    backgroundPosition: isHover ? "left bottom" : " right bottom",
    transition: "all 200ms ease-out",
  };

  return (
    <div
      style={{ backgroundImage: `url(${props.src})`, height: ` ${props.y}px` }}
      className="individual-offer"
    >
      <div
        className="hover-element"
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        style={{ height: `${props.y}px` }}
      ></div>
      <div
        className="offer-coverage"
        style={{
          alignItems: props.position === "down" ? "flex-end" : "flex-start",
        }}
      >
        <div className="offer-information">
          <div className="offer-header">
            <div>
              {props.title.split("/n").map((value, key) => {
                return (
                  <p className="offer-title" key={key}>
                    {value} <br />
                  </p>
                );
              })}
            </div>
            <div className="offer-rectangle"></div>
          </div>
          <div>
            <div className="border-line"></div>
            <div className="offer-price">{props.price}</div>
          </div>
        </div>
        <div className="offer-button" style={buttonStyle}>
          <OfferArrow hover={isHover} />
        </div>
      </div>
    </div>
  );
};

const Offer = () => {
  return (
    <Container className="offer-container">
      <IndividualOffer
        position="up"
        src={pic1}
        y="495"
        title="Biuro"
        price="od 1000zł/msc"
      />
      <IndividualOffer
        position="up"
        src={pic2}
        y="495"
        title={"Lorem/nipsum"}
        price="od 500zł/msc"
      />
      <IndividualOffer
        position="down"
        src={pic3}
        y="362"
        title={"Biuro/nlorem"}
        price="od 100zł/h"
      />
      <IndividualOffer
        position="down"
        src={pic4}
        y="362"
        title={"Biuro lorem ipsum/nLorem"}
        price="od 100zł/h"
      />
    </Container>
  );
};

export default Offer;
