import React from "react";
import "./join.css";

const Join = () => {
  return (
    <div className="Join" id="join__id">
      <div className="Left__j">
        <hr />
        <div>
          <span className="stroke-text">READY TO </span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text"> WITH US?</span>
        </div>
      </div>
      <div className="Right__j">
        <form action="" className="join__form">
          <input type="email" placeholder="Enter your Email Address here" />
          <button className="btn btn_j">Join now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
