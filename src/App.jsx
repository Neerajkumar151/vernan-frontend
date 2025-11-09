import React, { useState, useRef, useEffect } from "react";
import Hero from "./components/Hero";
import AboutTeam from "./components/AboutTeam";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import scrollBarImg from "./assets/scroll.png";

export default function App() {
  const [activePage, setActivePage] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRef = useRef(null);

  const totalSections = 6;

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      const progress = scrollLeft / (scrollWidth - clientWidth);
      setScrollProgress(progress);

      const index = Math.round(scrollLeft / clientWidth);
      setActivePage(index);
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-wrapper">
  
      {activePage === 0 ? <Navbar key="navbar1" /> : <Navbar2 key="navbar2" />}

      <div className="horizontal-scroll" ref={scrollRef}>
        <section className="panel"><Hero /></section>
        <section className="panel"><AboutTeam /></section>
        <section className="panel"><AboutUs /></section>
        <section className="panel"><Services/></section>
        <section className="panel"><Portfolio/></section>
        <section className="panel"><Contact/></section>
      </div>

   
      <div className="scroll-indicator-container">
  <img
    src={scrollBarImg}
    alt="Scroll Indicator"
    className="scroll-indicator"
    style={{
      transform: `translateX(${scrollProgress * (window.innerWidth - 245)}px)`,
    }}
  />
</div>
    </div>
  );
}

