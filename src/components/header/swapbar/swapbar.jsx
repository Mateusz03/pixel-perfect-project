import React, { useState, useContext } from "react";
import "./swapbar.scss";
import { Container } from "react-bootstrap";
import { MoveContext } from "../header";

const Arrow = (props) => {
  return (
    <svg
      style={{ transform: `rotate(${props.rotate}deg)` }}
      xmlns="http://www.w3.org/2000/svg"
      width="38.268"
      height="33.624"
    >
      <g data-name="CompositeLayer">
        <path
          d="M16.812 0 0 16.812l16.812 16.812"
          strokeLinejoin="round"
          strokeLinecap="square"
          strokeWidth="3"
          stroke={props.color}
          fill="transparent"
          data-name="Path 429"
        />
        <path
          d="M38.268 16.812H1.763"
          strokeLinejoin="round"
          strokeLinecap="square"
          strokeWidth="3"
          stroke={props.color}
          fill="transparent"
          data-name="Path 428"
        />
      </g>
    </svg>
  );
};

const Swapbar = () => {
  const { currentImage, setImage } = useContext(MoveContext);
  const [currentElement, setElement] = useState(1);
  const [arrowLeft, setArrowLeft] = useState("black");
  const [arrowRight, setArrowRight] = useState("black");
  const image_move = (current_value, target_value) => {
    if (current_value < target_value) {
      let i = currentImage;
      let interval = setInterval(() => {
        if (i === target_value) clearInterval(interval);
        setImage(i);
        i++;
      }, 1);
    }
    if (current_value > target_value) {
      let i = currentImage;
      let interval = setInterval(() => {
        if (i === target_value) clearInterval(interval);
        setImage(i);
        i--;
      }, 1);
    }
  };
  const image_background = (elem) => {
    switch (elem) {
      case 1:
        // setImage(-100);
        image_move(currentImage, -100);
        break;
      case 2:
        image_move(currentImage, -65);
        // setImage(-65);
        break;
      case 3:
        image_move(currentImage, -35);
        // do {
        //   setImage(-30);
        // } while (currentImage !== -30);

        break;
      case 4:
        image_move(currentImage, 0);
        // setImage(0);
        break;
      default:
        break;
    }
  };
  const SwapBackground = (dir) => {
    if (dir === "left") {
      if (currentElement === 1) {
        setElement(4);
        image_background(4);
      } else {
        setElement(currentElement - 1);
        image_background(currentElement - 1);
      }
    }
    if (dir === "right") {
      if (currentElement === 4) {
        setElement(1);
        image_background(1);
      } else {
        setElement(currentElement + 1);
        image_background(currentElement + 1);
      }
    }
  };

  return (
    <Container className="swapbar-container">
      <div
        className="swap-button"
        onClick={() => {
          SwapBackground("left");
        }}
        onMouseEnter={() => {
          setArrowLeft("white");
        }}
        onMouseLeave={() => {
          setArrowLeft("black");
        }}
      >
        <Arrow color={arrowLeft} />
      </div>
      <div
        className="swap-button"
        onClick={() => {
          SwapBackground("right");
        }}
        onMouseEnter={() => {
          setArrowRight("white");
        }}
        onMouseLeave={() => {
          setArrowRight("black");
        }}
      >
        <Arrow rotate="180" color={arrowRight} />
      </div>
      <div className="display-output">
        <p className="previous-value">
          0{currentElement !== 1 && currentElement - 1}
          {currentElement === 1 && 4}
        </p>
        <div className="current-image-bar">
          <div
            className="line-bar"
            style={{
              marginLeft:
                currentElement === 1 ? "0%" : `${(currentElement - 1) * 25}%`,
            }}
          ></div>
        </div>
        <p className="next-value">
          0{currentElement !== 4 && currentElement + 1}
          {currentElement === 4 && 1}
        </p>
      </div>
    </Container>
  );
};
export default Swapbar;
