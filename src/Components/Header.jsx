/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
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
        backgroundColor: "white",
      }}
    >
      <a href="/">Harris Gustafson</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#footer">Contact</a>
    </nav>
  );
};

export default Header;
