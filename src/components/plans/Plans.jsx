import React from "react";
import "./plan.css";
import PlansData from "../data/PlansData";
import tick from "../../images/tick.png";

const Plans = () => {
  return (
    <div className="plans__container">
      <div className="programes__header">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>
      <div className="plans">
        {PlansData.map((p, indx) => (
          <div className="plan" key={indx}>
            {p.Icon}
            <span>{p.name}</span>
            <span>₹ {p.price}</span>
            <div className="features">
              {p.features.map((f, i) => (
                <div className="feature">
                  <img src={tick} alt="" />
                  <span key={i}>{f}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benefits -></span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
