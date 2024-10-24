/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    // <nav>
    //   <ul>
    //     <li><a href="#hero">Home</a></li>
    //     <li><a href="#projects">Projects</a></li>
    //     <li><a href="#contact">Contact</a></li>
    //   </ul>
    // </nav>
    <nav
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <a href="#about">About</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#education">Education</a>
      <a href="#footer">Contact</a>
    </nav>
  );
};

export default Header;
