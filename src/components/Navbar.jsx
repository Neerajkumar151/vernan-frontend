import React from "react";
import navLogo from "../assets/Open.svg";
import talkImg from "../assets/letstalk.png";

export default function Navbar({ scrollToPage }) {
  const handleScroll = (pageIndex) => (e) => {
    e.preventDefault();
    if (scrollToPage) scrollToPage(pageIndex);
  };

  const scrollToHome = (e) => {
    e.preventDefault();
    if (scrollToPage) scrollToPage(0);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
   
      </div>

      <ul className="nav-links">
        
        <li>
  <a
    onClick={() => document.getElementById("services").scrollIntoView({ behavior: "smooth" })}
    style={{ cursor: "pointer" }}
  >
    Services
  </a>
</li>


        <li>
  <a
    onClick={() => document.getElementById("about-team").scrollIntoView({ behavior: "smooth" })}
    style={{ cursor: "pointer" }}
  >
    Their Story
  </a>
</li>


        <li>
  <a
    onClick={() => document.getElementById("about-us").scrollIntoView({ behavior: "smooth" })}
    style={{ cursor: "pointer" }}
  >
    Our Story
  </a>
</li>

        <li>
          <a onClick={() => document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" })}
    style={{ cursor: "pointer" }}>
            Varnan
          </a>
        </li>
      </ul>

      <div className="nav-right">
        <a
          onClick={() => document.getElementById("contact-us").scrollIntoView({ behavior: "smooth" })}
    style={{ cursor: "pointer" }}
        >
          <img src={talkImg} alt="Let's Talk" className="talk-img" />
        </a>
        <img src={navLogo} alt="Menu" className="nav-icon" />
      </div>
    </nav>
  );
}