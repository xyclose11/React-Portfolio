import React from "react";
import Container from "./Components";
import image from "../images/open_book.jpg";

const imageAltText = "Picture of an open book";

const description =
  "I'm a Computer Science & Cyber Security student at Valparaiso University, with plans to branch out into the field of full stack development.";

const skillsList = [
  "Web design",
  "User experience",
  "Agile Development",
  "Digital Forensics",
  "Parallel & Distributed Computing",
];


const detailOrQuote =
  "I am driven to find new ways to solve the problems that prevent others from accessing the tools they need to succeed.";
const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
        <Container size="medium">
          <div style={{ backgroundColor: "pastelgreen", padding: "0rem" }}>
            <h3>Description Container</h3>
            <p>This is a description container with a pastel green background.</p>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default About;
