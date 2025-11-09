import React, { useState } from "react";
import bg from "../assets/bg.png";
import filmProduction from "../assets/film-production.png";
import branding from "../assets/branding.png";
import artCuration from "../assets/art-curation.png";
import underline from "../assets/underline.png";
import tapeLeft from "../assets/tape-left.png";
import tapeMiddle from "../assets/tape-middle.png";
import tapeRight from "../assets/tape-right.png";
import borderDesign from "../assets/border-design.svg";
import FilmProduction from "./FilmProduction";
import Branding from "./Branding";
import ArtCuration from "./ArtCuration";

export default function Services() {
  const [activePage, setActivePage] = useState(null);

  if (activePage === "film") return <FilmProduction onBack={() => setActivePage(null)} />;
  if (activePage === "branding") return <Branding onBack={() => setActivePage(null)} />;
  if (activePage === "art") return <ArtCuration onBack={() => setActivePage(null)} />;

  return (
    <section id="services" className="services" style={{ backgroundImage: `url(${bg})` }}>
      <div className="services-scale-wrapper">
        <h2 className="services-heading">
          The storyboard reveals the breadth of our craft.
        </h2>

        <img src={underline} alt="Underline Design" className="underline-img" />

        <img src={tapeLeft} alt="Tape Left" className="tape tape-left" />
        <img src={tapeMiddle} alt="Tape Middle" className="tape tape-middle" />
        <img src={tapeRight} alt="Tape Right" className="tape tape-right" />

        <div className="services-images">
          <img
            src={filmProduction}
            alt="Film Production"
            className="service-img film"
            onClick={() => setActivePage("film")}
            style={{ cursor: "pointer" }}
          />
          <img
            src={branding}
            alt="Branding"
            className="service-img branding"
            onClick={() => setActivePage("branding")}
            style={{ cursor: "pointer" }}
          />
          <img
            src={artCuration}
            alt="Art Curation"
            className="service-img art"
            onClick={() => setActivePage("art")}
            style={{ cursor: "pointer" }}
          />
        </div>

        <img src={borderDesign} alt="Bottom Design" className="border-design" />
      </div>
    </section>
  );
}
