import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Portfolio from "./Components/Portfolio";

import "./styles.css";
import Hero from "./Components/Hero";

const siteProps = {
  name: "Harris Gustafson",
  title: "Full Stack Developer",
  email: "Harris.Gustafson@valpo.edu",
  gitHub: "xyclose11",
  instagram: "",
  linkedIn: "harrisgustafson",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Hero />
      {/* <About /> */}
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
