import React from "react";
import Header from "./header/Header";
import "./hero.css";
import hero from "../images/hero.png";
import back from "../images/back.png";
import love from "../images/love.png";
import calories from "../images/calories.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <Header />
        <div className="best_add">
          <div></div>
          <span className="add">THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>

        <div className="hero__text">
          <div>
            <span className="stroke-text">SHAPE</span>
            <span>YOUR</span>
          </div>
          <div>
            <span>IDEAL BODY</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>+120</span>
            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span>+1000</span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span>+50</span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>

        <div className="hero__buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right">
        <button className="btn">Join Now</button>

        <div className="heart__rate">
          <img src={love} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>

        <img src={hero} alt="" className="hero__image" />
        <img src={back} alt="" className="hero__image__back" />

        <div className="calories">
          <img src={calories} alt="" />
          <div className="">
            <span>Calories Burned</span>
            <span>276 Kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
