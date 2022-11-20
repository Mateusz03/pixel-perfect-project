import React, { useState, createContext } from "react";
import { HeaderNavbar, Title, Form, Swapbar } from "../imports";
import "./header.scss";
import bg1 from "../../images/header/first_image.png";
import bg2 from "../../images/header/second_image.png";
import bg3 from "../../images/header/third_image.png";
import bg4 from "../../images/header/fourth_image.png";

export const MoveContext = createContext(-100);

const Header = () => {
  const [currentImage, setImage] = useState(-100);
  return (
    <header>
      {" "}
      <MoveContext.Provider value={{ currentImage, setImage }}>
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${bg4}),url(${bg3}),url(${bg2}),url(${bg1})`,
            backgroundPosition: `${0 + currentImage}%,${30 + currentImage}%,${
              65 + currentImage
            }%,${100 + currentImage}%`,
          }}
        >
          <div className="darkening">
            <HeaderNavbar />
            <div className="content">
              <Title />
              <Form />
            </div>
            <Swapbar />
          </div>
        </div>
      </MoveContext.Provider>
    </header>
  );
};

export default Header;
