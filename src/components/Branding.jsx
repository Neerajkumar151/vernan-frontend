import React from "react";
import bg from "../assets/bg.png";
import brandingMain from "../assets/service-branding.png";
import backBtn from "../assets/back.png";
import underline from "../assets/underline.png";
import arrow from "../assets/Arrow.svg";
import leftIcon from "../assets/branding-left.svg";
import rightTop from "../assets/branding-righttop.svg";
import rightMiddle from "../assets/branding-rightmiddle.svg";
import rightBottom from "../assets/branding-rightbottom.svg";

export default function Branding({ onBack }) {
  return (
    <section className="branding-page" style={{ backgroundImage: `url(${bg})` }}>
      <div className="branding-scale-wrapper">
        {/* Back button */}
        <img
          src={backBtn}
          alt="Back"
          className="film-back" /* Reuse same CSS */
          onClick={onBack}
        />

        {/* Heading + underline */}
        <h2 className="branding-heading">
          “A brand is a voice, and a product is a souvenir.” – Lisa Gansky
        </h2>
        <img src={underline} alt="Underline" className="film-underline" />

        {/* Main image */}
        <div className="branding-main-img-wrapper">
          <img src={brandingMain} alt="Branding" className="branding-main-img" />
        
        </div>

        {/* Paragraph */}
        <p className="branding-text">
          A brand isn’t just what you see – it’s what you remember, what you
          carry home, and what you trust. <br />
          We shape brands that people remember, return to, and fall in love with. <br />
          V creates: <br />
            • Branding & Communication <br />
            • Market Mapping <br />
            • Content Management <br />
            • Social Media Management <br />
            • Rebranding
        </p>

        {/* Explore arrow */}
        <p className="film-explore-text">Explore Now</p>
        <img src={arrow} alt="Explore Arrow" className="film-arrow" />

        {/* Decorative images */}
        <img src={leftIcon} alt="Left Icon" className="branding-left" />
        <img src={rightTop} alt="Right Top Icon" className="branding-right-top" />
        <img src={rightMiddle} alt="Right Middle Icon" className="branding-right-middle" />
        <img src={rightBottom} alt="Right Bottom Icon" className="branding-right-bottom" />
      </div>
    </section>
  );
}
