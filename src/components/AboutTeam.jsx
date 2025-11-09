import React from "react";
import bg from "../assets/bg.png";
import note from "../assets/stickynote.svg";
import silhouettes from "../assets/peoples.svg";
import indiaGate from "../assets/indiagate.svg";
import arrowBranding from "../assets/brandingexpert.svg";
import arrowFilmMakers from "../assets/filmmaker.svg";
import arrowArtCurators from "../assets/artcreators.svg";

export default function AboutTeam() {
  return (
    // This parent uses flexbox to center the design
    <section id="about-team" className="about-team" style={{ backgroundImage: `url(${bg})` }}>
      
      {/* This wrapper is the 1920x1080 artboard that gets scaled */}
      <div className="about-scale-wrapper">
        <img src={note} alt="Sticky Note" className="note-img" />
        <img src={indiaGate} alt="India Gate" className="indiagate-img" />
        <img src={silhouettes} alt="People Group" className="silhouettes-img" />

        <img src={arrowBranding} alt="Branding Experts Arrow" className="arrow-branding" />
        <p className="branding-text1">Branding Experts</p>

        <img src={arrowFilmMakers} alt="Film Makers Arrow" className="arrow-filmmakers" />
        <p className="filmmakers-text">Film Makers</p>

        <img src={arrowArtCurators} alt="Art Curators Arrow" className="arrow-art" />
        <p className="artcurators-text">Art Curators</p>

        <p className="about-desc-text">
          Take a closer look at the stories V bring to life.
        </p>

        <a onClick={() => document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" })}
    style={{ cursor: "pointer" }}><button  className="about-btn">View Portfolio</button></a>
      </div>
    </section>
  );
}