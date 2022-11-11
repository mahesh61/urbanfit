import React from "react";
import "./whyUs.css";
import r1 from "../../images/1.png";
import r2 from "../../images/2.png";
import r3 from "../../images/3.png";
import r4 from "../../images/4.png";
import check from "../../images/check.png";
import nb from "../../images/NB.png";
import ad from "../../images/Adidas.png";
import nike from "../../images/Nike.png";

const WhyUs = () => {
  return (
    <div className="reasons">
      <div className="left__r">
        <img src={r1} alt="" />
        <img src={r2} alt="" />
        <img src={r3} alt="" />
        <img src={r4} alt="" />
      </div>
      <div className="right__r">
        <span>SOME REASONS</span>
        <div>
          <span className="stroke-text">Why</span>
          <span>CHOOSE US?</span>
        </div>
        <div className="details-r">
          <div>
            <img src={check} alt="" />
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={check} alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={check} alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={check} alt="" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>

        <span style={{ color: `var(--gray)`, fontWeight: "normal" }}>
          OUR PARTNERS
        </span>
        <div className="partners">
          <img src={[nb]} alt="" />
          <img src={[ad]} alt="" />
          <img src={[nike]} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
