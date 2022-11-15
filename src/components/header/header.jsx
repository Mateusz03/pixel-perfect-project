import React from "react";
import HeaderNavbar from "./navbar/navbar";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <div className="darkening">
        <HeaderNavbar />
      </div>
    </header>
  );
};

export default Header;
