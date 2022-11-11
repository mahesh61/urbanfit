import React from "react";
import "./programes.css";
import arrow from "../../images/Arrow_r.png";
import ProgramesData from "../data/ProgramesData";
const Programes = () => {
  return (
    <div className="programes" id="programes">
      <div className="programes__header">
        <span className="stroke-text">EXPLORE OUR</span>
        <span>PROGRAMS</span>
        <span className="stroke-text">TO SHAPE YOU</span>
      </div>
      <div className="p__categories">
        {ProgramesData.map((p) => (
          <div className="category">
            {p.image}
            <span>{p.heading}</span>
            <span>{p.details}</span>
            <div className="join__now">
              <span>Join Now</span>
              <img src={arrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programes;
