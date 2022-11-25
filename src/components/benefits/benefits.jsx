import React, { useState } from "react";
import "./benefits.scss";
import { Container } from "react-bootstrap";
import pic1 from "../../images/benefits/1.svg";
import pic2 from "../../images/benefits/2.svg";
import pic3 from "../../images/benefits/3.svg";
import pic4 from "../../images/benefits/4.svg";
import pic5 from "../../images/benefits/5.svg";
import pic6 from "../../images/benefits/6.svg";
import pic7 from "../../images/benefits/7.svg";
import BenefitsArrow from "../../images/benefits/arrow";

const BenefitItem = (props) => {
  return (
    <div className="benefit-item">
      {props.type === "item" && (
        <div
          style={{
            display: "flex",
            gap: "44px",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <img src={props.src} style={{ height: "120px" }} alt="img" />
          {props.text}
        </div>
      )}
      {props.type === "title" && (
        <div className="text-title">
          {props.text}
          <div className="under-line"></div>
        </div>
      )}
    </div>
  );
};

const Benefits = () => {
  const [hover, setHover] = useState(false);
  console.log(hover);
  return (
    <Container className="benefits-container">
      <div className="items-container">
        <BenefitItem type="title" text="Lorem ipsum dolor sit amet, conse" />
        <BenefitItem type="item" src={pic6} text="Lorem ipsum" />
        <BenefitItem
          type="item"
          src={pic5}
          text="Lorem ipsum dolor sit amet conse"
        />
        <BenefitItem type="item" src={pic4} text="Lorem ipsum dolor sit amet" />
        <BenefitItem type="item" src={pic7} text="Lorem ipsum dolor sit amet" />
        <BenefitItem
          type="item"
          src={pic1}
          text="Lorem ipsum dolor sit amet, conse lorem ipsum lorem"
        />
        <BenefitItem
          type="item"
          src={pic2}
          text="Lorem ipsum dolor sit amet, conse lorem ipsum lorem "
        />
        <BenefitItem
          type="item"
          src={pic3}
          text="Lorem ipsum dolor sit amet, conse lorem ipsum lorem "
        />
      </div>
      <div
        className="benefit-button"
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <div
          className="benefit-button-text"
          style={{
            background: "linear-gradient(to right, #ffcc48 50%, black 50%)",
            backgroundSize: "200% 100%",
            backgroundPosition: hover ? "left bottom" : "right bottom",
            transition: "all 0.15s ease-out",
            color: hover ? "black" : "white",
          }}
        >
          Dowiedz się więcej
        </div>

        <div className="benefit-arrow-button">
          <BenefitsArrow stroke="white" />
        </div>
      </div>
    </Container>
  );
};

export default Benefits;
