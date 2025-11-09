import React from "react";
import bg from "../assets/bg.png";
import artMain from "../assets/service-art.png";
import backBtn from "../assets/back.png";
import underline from "../assets/underline.png";
import arrow from "../assets/Arrow.svg";
import leftIcon from "../assets/artleft.svg";
import rightTop from "../assets/artrighttop.svg";
import rightMiddle from "../assets/artrightmiddle.svg";
import rightBottom from "../assets/artrightbottom.svg";

export default function ArtCuration({ onBack }) {
  return (
    <section className="art-page" style={{ backgroundImage: `url(${bg})` }}>
      <div className="art-scale-wrapper">
        {/* Back button */}
        <img
          src={backBtn}
          alt="Back"
          className="film-back" /* Reuse */
          onClick={onBack}
        />

        {/* Heading */}
        <h2 className="art-heading">
          “V take art where it belongs, to the people.” – Vernita Verma
        </h2>
        <img src={underline} alt="Underline" className="film-underline" />

        {/* Main image */}
        <div className="film-main-img-wrapper">
          <img src={artMain} alt="Art Curation" className="film-main-img" />
        
        </div>

        {/* Paragraph */}
        <p className="art-text">
          Art isn’t meant to sit on distant walls – it’s meant to breathe, to
          travel, to belong. <br />
          Through every festival, every performance, and every gathering, we
          help stories find their stage and their people. <br />
          V curates: <br />
          • Art Festivals <br />
          • Live Performances <br />
          • Community Events <br />
          • Cultural Storytelling
        </p>

        {/* Explore arrow */}
        <p className="film-explore-text">Explore Now</p>
        <img src={arrow} alt="Explore Arrow" className="film-arrow" />

        {/* Decorative icons */}
        <img src={leftIcon} alt="Left Icon" className="art-left" />
        <img src={rightTop} alt="Right Top Icon" className="art-right-top" />
        <img src={rightMiddle} alt="Right Middle Icon" className="art-right-middle" />
        <img src={rightBottom} alt="Right Bottom Icon" className="art-right-bottom" />
      </div>
    </section>
  );
}
