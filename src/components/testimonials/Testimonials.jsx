import React, { useState } from "react";
import "./testimonial.css";
import TesimonialsData from "../data/TesimonialsData";
import arrow1 from "../../images/Arrow.png";
import arrow2 from "../../images/Arrow_r.png";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const length = TesimonialsData.length;
  return (
    <div className="Testimonials">
      <div className="left__t">
        <span>TESTIMONIALS</span>
        <span className="stroke-text">WHAT THEY</span>
        <span>SAY ABOUT US</span>
        <span>{TesimonialsData[selected].review}</span>

        <span>
          <span style={{ color: "var(--orange)" }}>
            {TesimonialsData[selected].name}
          </span>{" "}
          - {TesimonialsData[selected].status}
        </span>
      </div>
      <div className="right__t">
        <div></div>
        <div></div>
        <img src={TesimonialsData[selected].image} alt="" />
        <div className="arrows">
          <img
            src={arrow1}
            alt=""
            onClick={() =>
              selected === 0
                ? setSelected(length - 1)
                : setSelected((prev) => prev - 1)
            }
          />
          <img
            src={arrow2}
            alt=""
            onClick={() =>
              selected === length - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
