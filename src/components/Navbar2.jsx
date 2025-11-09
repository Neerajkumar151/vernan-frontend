import React from "react";
import vfilmsLogo from "../assets/vfilmlogo.png";
import equalIcon from "../assets/equal.png";

export default function Navbar2() {
  return (
    <nav className="navbar2">
      <div className="nav-left2">
        <img
  src={vfilmsLogo}
  alt="VFilms Logo"
  className="vfilms-logo2"
  onClick={() => document.getElementById("hero").scrollIntoView({ behavior: "smooth" })}
/>

      </div>

      <div className="nav-right">
        <img src={equalIcon} alt="Menu Icon" className="equal-icon2" />
      </div>
    </nav>
  );
}
