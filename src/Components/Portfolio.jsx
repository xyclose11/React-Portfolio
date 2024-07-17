import React from "react";

const projectList = [
  {
    title: "Auction Commerce Website",
    description:
      "Created a website for a mock auction company using Django, that inlcudes a login page, product listings, and more!",
    url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i", // Update with your project URL or GitHub project page or make a new react page that displays it
  },
  {
    title: "Python Password Manager",
    description:
      "Created a password manager using Python, that allows users to store their passwords in a secure way.",
    url: "https://github.com/xyclose11/PasswordManager",
  },
  {
    title: "Raspberry Pi 4 OpenWRT Router",
    description:
      "Created a router using a Raspberry Pi 4 and OpenWRT, that allows users to connect to the internet.",
    url: "",
  },
  {
    title: "Garden X",
    description:
      "Designed and implemented a web application that allows users to lookup a plant and get information about it. Uses Flash, SQL, Python, Javascript, and HTML/CSS. Submitted to CS50 as a final project.",
    url: "https://www.youtube.com/watch?v=MAhIyux1Ia0",
  },
  {
    title: "MPI, OpenMP, and CUDA Parallel Programming Projects",
    description:
      "Created a variety of projects that use MPI, OpenMP, and CUDA to parallelize code. These projects include a 2D heat transfer simulation, a 2D wave simulation, and a 3D heat transfer simulation.",
    url: "",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <div style={{ background: "rgba(255,255,255,0.75)", boxShadow: "20px 20px 500px rgba(0,0,0,0.1)" }}>
        <h2 style={{ textAlign: "center", paddingBottom: "20px" }}>Projects</h2>
      </div>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title} style={{ backgroundColor: "white", boxShadow: "0 0 5px rgba(0,0,0,0.1)" }}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
