import React from "react";
import bg from "../assets/bg.png";
import mandala from "../assets/Hero Mandala.svg";
import vfilmsLogo from "../assets/vfilmlogo.png";

export default function Hero() {
  return (
    <section id="hero" className="hero" style={{ backgroundImage: `url(${bg})` }}>
      <div className="hero-overlay">
        <div className="hero-left">
          <div className="mandala-wrapper">
            <img src={mandala} alt="Mandala" className="mandala" />
            <img src={vfilmsLogo} alt="VFilms Logo" className="vfilms-logo" />
          </div>
        </div>
        <div className="hero-right">
          <h2 className="hero-quote">
            Varnan is where stories find their voice and form
          </h2>
          <p className="hero-sub">Films . Brands . Art</p>
          <p className="hero-desc">
            Since 2009, V’ve been telling stories - stories of people,
            their journeys, and the places that shape them.
            Some begin in polished boardrooms, others in humble
            village squares. But every story starts the same way 
            - by listening with intention. V believes it takes trust,
            patience, and an eye for the unseen to capture what truly matters.
            V doesn’t just tell stories - V honors them.
          </p>
        </div>
      </div>
      {/* <img src={scrollBar} alt="Scroll bar" className="scroll-bar" /> */}
    </section>
  );
}
