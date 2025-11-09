import React from "react";
import bg from "../assets/bg.png";
import centerImage from "../assets/portfolio-center.png";
import leftCamera from "../assets/portfolio-left-camera.svg";
import rightPattern from "../assets/portfolio-right-pattern.png";
import leftRect from "../assets/left-rectangle.png";
import rightRect from "../assets/right-rectangle.png";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio" style={{ backgroundImage: `url(${bg})` }}>
      <div className="portfolio-scale-wrapper">
   
        <div className="portfolio-heading">
          <h2>The Highlight Reel</h2>
          <p>Watch the magic we've captured.</p>
        </div>

        <img src={leftCamera} alt="Left Camera" className="portfolio-left-camera" />

        <img src={rightPattern} alt="Right Pattern" className="portfolio-right-pattern" />

        <div className="portfolio-center-frame">
          <img src={centerImage} alt="Highlight Video" className="portfolio-center-img" />

          <img src={leftRect} alt="Left Rectangle" className="portfolio-left-rect" />

          <img src={rightRect} alt="Right Rectangle" className="portfolio-right-rect" />

          <img src={leftArrow} alt="Left Arrow" className="portfolio-left-arrow" />

          <img src={rightArrow} alt="Right Arrow" className="portfolio-right-arrow" />
        </div>
      </div>
    </section>
  );
}
