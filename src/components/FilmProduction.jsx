import React from "react";
import bg from "../assets/bg.png";
import filmMain from "../assets/service-filmproduction.png";
import backBtn from "../assets/back.png";
import underline from "../assets/underline.png";
import arrow from "../assets/Arrow.svg";
import camLeft from "../assets/cameraleft.svg";
import camRightTop from "../assets/camerarighttop.svg";
import camMiddle from "../assets/cameramiddle.svg";
import camRightBottom from "../assets/camerarightbottom.svg";

export default function FilmProduction({ onBack }) {
  return (
    <section className="film-production" style={{ backgroundImage: `url(${bg})` }}>
      <div className="film-scale-wrapper">

        {/* Back button */}
        <img
          src={backBtn}
          alt="Back"
          className="film-back"
          onClick={onBack}
        />

        {/* Heading + underline */}
        <h2 className="film-heading">
          “Filmmaking is a chance to live many lifetimes.” - Robert Altman
        </h2>
        <img src={underline} alt="Underline" className="film-underline" />

        {/* Main image */}
        <div className="film-main-img-wrapper">
          <img src={filmMain} alt="Film Production" className="film-main-img" />
        </div>

        {/* Paragraph */}
        <p className="film-text">
          Who says films are just an escape?<br />
          We see them as a way to live many lives – to feel, to explore, and to tell stories that stay.<br />
          And with each film, we carry new memories and new reasons to keep creating.<br />
          V crafts:<br />
          • Documentaries<br />
          • Corporate Videos<br />
          • 2D Animation Videos<br />
          • 3D Animation Videos
        </p>

        {/* Arrow */}
        <p className="film-explore-text">Explore Now</p>
        <img src={arrow} alt="Explore Arrow" className="film-arrow" />

        {/* Decorative cameras */}
        <img src={camLeft} alt="Left Camera" className="film-cam-left" />
        <img src={camRightTop} alt="Right Top Camera" className="film-cam-right-top" />
        <img src={camMiddle} alt="Middle Camera" className="film-cam-middle" />
        <img src={camRightBottom} alt="Right Bottom Camera" className="film-cam-right-bottom" />
      </div>
    </section>
  );
}
