import React from "react";

const About = () => {
  return (
    <section className="padding" id="about">
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div
          style={{
            backgroundColor: "white",
            width: "38%",
            padding: "1rem",
            marginLeft: "10rem",
            textAlign: "center",
            borderRadius: "10px",
          }}
        >
          <h2 style={{ fontSize: "60px" }}>About Me</h2>
          <p>
            I am a self driven individual who is passionate about problem solving especially in the computing field as no two problems are alike (most of the time).
            I am constantly looking for new and emerging technologies to experement with and learn.
            While I do believe reinventing the wheel may not be the best use of my, I do believe that there is a lot of benefit in understanding how the wheel works.
          </p>
        </div>
        <div
          style={{
            backgroundColor: "white",
            width: "33%",
            padding: "1rem",
            margin: "1rem",
            textAlign: "center",
            borderRadius: "10px",
          }}
        >
          <h2 style={{ fontSize: "50px" }}>I have experience with: </h2>
          <ul style={{ listStyle: "none" }}>
            <li>TypeScript</li>
            <li>C# (ASP.NET Core)</li>
            <li>Java</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Git</li>
          </ul>
        </div>
        <div
          style={{
            backgroundColor: "white",
            width: "20%",
            padding: "1rem",
            marginRight: "10rem",
            textAlign: "center",
            borderRadius: "10px",
          }}
        >
          <h2 style={{ fontSize: "40px" }}>Interests</h2>
          <ul style={{ listStyle: "none" }}>
            <li>Rust</li>
            <li>Full Stack Development</li>
            <li>Gardening</li>
            <li>Parallel Computing</li>
            <li>Algorithms</li>
            <li>Philosophy</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
