import React from "react";

import image from "../images/leaves.jpg";

const imageAltText = "Picture of an open book";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "As an aspiring Full-Stack Developer, I am consistently learning different technologies & implementing different aspects of Full-Stack Development, Cyber Security & Business to create a dynamic fully enveloped skillset.";


const skillsList = [
  "ASP.NET Core MVC (C#)",
  "React",
  "Agile Development",
  "TypeScript(Javascript)",
  "PostgreSQL",
  "MongoDB",
  "Node.js",
  "Penetration Testing",
];


const detailOrQuote =
  "I am constantly learning and adapting to new technologies and methodologies to ensure that I am always at the forefront of the industry.";
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
      </div>
    </section>
  );
};

export default About;
