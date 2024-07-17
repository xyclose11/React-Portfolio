import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import Container from "./Components";

// import image from "../images/thinking_man.jpg";

const imageAltText = "Thinking Man";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      {/* <img className="background" src={image} alt="" /> */}
      <div style={{ position: "absolute", top: "4rem", left: "8rem", width: "25rem" }}>
        <Container size={"medium"}>
          <h2 style={{ color: "white" }}>{name}</h2>
          <h3 style={{ paddingTop: "20px", color: "white" }}>{title}</h3>
        </Container>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem", animation: "bounce 2s infinite" }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
