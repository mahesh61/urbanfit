import React from "react";
import "./header.css";
import logo from "../../images/UrbanFitLogo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <ul className="header__menu">
        <li>Home</li>
        <li>Programs</li>
        <li>Why Us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  );
};

export default Header;
