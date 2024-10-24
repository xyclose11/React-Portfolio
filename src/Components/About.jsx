import React from "react";

const About = () => {
  return (
    <section className="padding" id="about">
      <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
        <div
          style={{
            backgroundColor: "white",
            width: "30%",
            padding: "1rem",
            margin: "3rem",
            textAlign: "center",
            borderRadius: "10px",
          }}
        >
          <h3 style={{ fontSize: "48px" }}>About Me</h3>
          <p>
            I am a dedicated computer scientist with a passion for solving complex computational
            problems. I thrive on the challenge of developing efficient algorithms and exploring new
            technologies. While I recognize the value of established solutions, I believe in the
            importance of understanding the underlying principles to innovate and improve upon
            existing systems.
          </p>
        </div>
        <div
          style={{
            backgroundColor: "white",
            width: "30%",
            padding: "1rem",
            margin: "3rem",
            textAlign: "center",
            borderRadius: "10px",
          }}
        >
          <h3 className="title">Technical Skills</h3>
          <div className="skills-grid">
            <div>
              <ul className="skills-list">
                <li>TypeScript (JavaScript, Node.js, jQuery)</li>
                <li>Java (Spring Boot, Swing, JavaFX)</li>
                <li>React (Next.js, Vite, Webpack)</li>
                <li>C# (ASP.NET Core, MVC, Blazor, Entity Framework Core)</li>
                <li>SQL (PostgreSQL, SQL Server, MySQL)</li>
                <li>Python (Django, Flask)</li>
                <li>XML</li>
                <li>JUnit</li>
                <li>Vim</li>
                <li>C</li>
                <li>Git</li>
              </ul>
            </div>
            <div>
              <ul className="skills-list">
                <li>HTML</li>

                <li>Docker</li>
                <li>Redux</li>
                <li>Jenkins</li>
                <li>Nmap</li>
                <li>Linux (Ubuntu, Mint, Kali)</li>
                <li>DevExpress</li>
                <li>Apache</li>
                <li>C/C++</li>
                <li>Go</li>
                <li>MongoDB</li>
                <li>Svelte</li>
                <li>CSS</li>
                <li>GraphQL</li>
                <li>Microsoft Office</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
