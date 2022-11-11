import React from "react";
import "./footer.css";
import git from "../../images/GIT.png";
import insta from "../../images/INSTA.png";
import lnkdn from "../../images/LINKDN.png";
import logo from "../../images/UrbanFitLogo.png";

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="container">
        <div className="social__icons">
          <img src={git} alt="" />
          <img src={insta} alt="" />
          <img src={lnkdn} alt="" />
        </div>
        <div className="logo__UBFT">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
