import React from "react";
import bg from "../assets/bg.png";
import sticker1 from "../assets/sticker1.png";
import sticker2 from "../assets/sticker2.png";
import sticker3 from "../assets/sticker3.png";
import semicircle from "../assets/semicircle.png";
import mountainSun from "../assets/mountain-sun.png";

export default function AboutUs() {
  return (
    <>
      <section id="about-us" className="aboutus" style={{ backgroundImage: `url(${bg})` }}>
        <div className="aboutus-scale-wrapper">
          {/* Left Text */}
          <h2 className="aboutus-heading">A montage of familiar faces and names.</h2>
          <p className="aboutus-subtext">
            Some stories come from the biggest names.
            Others begin with bold, rising voices. <br />
            We’ve been fortunate to walk alongside both –<br />
            listening, creating, and building stories that matter.
          </p>

          {/* Right Text */}
          <p className="aboutus-righttext">
            Every project is more than just a brief – <br />
            it’s a new chapter waiting to be written. <br />
            Together, we’ve crafted tales that inspire, <br />
            connect, and endure.
          </p>

          {/* Stickers */}
          <img src={sticker1} alt="85+ Projects" className="sticker sticker1" />
          <img src={sticker2} alt="50+ Happy Clients" className="sticker sticker2" />
          <img src={sticker3} alt="10+ Experts Team" className="sticker sticker3" />

          {/* Semicircle */}
          <img src={semicircle} alt="Semicircle Graphic" className="semicircle-img" />

          {/* Mountain & Sun */}
          <img src={mountainSun} alt="Mountain and Sun" className="mountain-sun-img" />
        </div>
      </section>
    </>
  );
}
