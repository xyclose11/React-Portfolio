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
            margin: "1rem",
            textAlign: "center",
            borderRadius: "10px",
          }}
        >
          <h2 style={{ fontSize: "60px" }}>About Me</h2>
          <p>
            I am a self driven individual who is passionate about problem solving in the computing
            field as no two problems are alike (most of the time). I am constantly looking for new
            and emerging technologies to experement with and learn. While I do believe reinventing
            the wheel may not be the best use of time, I do believe that there is a lot of benefit
            understanding how the wheel works.
          </p>
        </div>
        <div
          style={{
            backgroundColor: "white",
            width: "30%",
            padding: "1rem",
            margin: "1rem",
            textAlign: "center",
            borderRadius: "10px",
          }}
        >
          <h2 style={{ fontSize: "50px" }}>I have experience with: </h2>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ flex: 1, marginRight: "1rem" }}>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ padding: "0.5rem 0", borderBottom: "1px solid #ddd" }}>
                  TypeScript (JavaScript)
                </li>
                <li style={{ padding: "0.5rem 0", borderBottom: "1px solid #ddd" }}>
                  C# (ASP.NET Core, MVC & Blazor)
                </li>
                <li style={{ padding: "0.5rem 0", borderBottom: "1px solid #ddd" }}>
                  Java (Spring Boot, Swing)
                </li>

                <li style={{ padding: "0.5rem 0", borderBottom: "1px solid #ddd" }}>
                  MongoDB (Mongoose)
                </li>
                <li style={{ padding: "0.5rem 0", borderBottom: "1px solid #ddd" }}>
                  Python (Django, Flask)
                </li>
                <li style={{ padding: "0.5rem 0", borderBottom: "1px solid #ddd" }}>Git</li>
              </ul>
            </div>
            <div style={{ flex: 1, marginLeft: "1rem" }}>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ padding: "0.5rem 0", borderBottom: "1px solid #ddd" }}>
                  SQL (Postgresql, SQL Server)
                </li>
                <li style={{ padding: "0.5rem 0", borderBottom: "1px solid #ddd" }}>
                  React (Next.js)
                </li>
                <li style={{ padding: "0.5rem 0", borderBottom: "1px solid #ddd" }}>
                  Node.js (Express)
                </li>
                <li style={{ padding: "0.5rem 0", borderBottom: "1px solid #ddd" }}>Rust</li>
                <li style={{ padding: "0.5rem 0", borderBottom: "1px solid #ddd" }}>Neovim</li>
                <li style={{ padding: "0.5rem 0", borderBottom: "1px solid #ddd" }}>C</li>
                <li style={{ padding: "0.5rem 0", borderBottom: "1px solid #ddd" }}>Go</li>
                <li style={{ padding: "0.5rem 0", borderBottom: "1px solid #ddd" }}>Linux</li>
                <li style={{ padding: "0.5rem 0", borderBottom: "1px solid #ddd" }}>HTML/CSS</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "white",
            width: "30%",
            padding: "1rem",
            margin: "1rem",
            textAlign: "center",
            borderRadius: "10px",
          }}
        >
          <h2 style={{ fontSize: "40px", marginBottom: "1rem" }}>Interests</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ padding: "0.5rem 0", borderBottom: "1px solid #ddd" }}>Rust</li>
            <li style={{ padding: "0.5rem 0", borderBottom: "1px solid #ddd" }}>
              Full Stack Development
            </li>
            <li style={{ padding: "0.5rem 0", borderBottom: "1px solid #ddd" }}>
              Parallel Computing
            </li>
            <li style={{ padding: "0.5rem 0", borderBottom: "1px solid #ddd" }}>
              Data Structures & Algorithms
            </li>
            <li style={{ padding: "0.5rem 0", borderBottom: "1px solid #ddd" }}>Philosophy</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
