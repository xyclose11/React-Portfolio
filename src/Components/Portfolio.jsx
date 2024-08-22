import React from "react";
import ProjectShowcase from "./ProjectShowcase";
import Container from "./Components";

const projectList = [
  {
    title: "Portfolio Website",
    description:
      "Created a portfolio website using React, to showcase my projects and skills.",
    url: "https://github.com/xyclose11/React-Portfolio", // Update with your project URL or GitHub project page or make a new react page that displays it
  },
  {
    title: "Python Password Manager",
    description:
      "Created a CLI password manager using Python, that allows users to store their passwords in a secure way.",
    url: "https://github.com/xyclose11/PasswordManager",
  },
  {
    title: "Raspberry Pi 4 OpenWRT Router",
    description:
      "Created a router using a Raspberry Pi 4 and OpenWRT, to allow my home network to have more control over the network. This also allowed me to implement SQM.",
    url: "",
  },
  {
    title: "MPI, OpenMP, and CUDA Parallel Programming Projects",
    description:
      "Created a variety of projects that use MPI, OpenMP, and CUDA to parallelize code for a course at Valparaiso University.",
    url: "",
  },
  {
    title: "Interpreter written in Go",
    description:
      "Following the guide from the book 'Create an interpreter using Go' to learn more about interpreters and eventually create my own.",
    url: "https://github.com/xyclose11/Interpreter",
  }
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">


      <div style={{ background: "rgba(255,255,255,0.75)", boxShadow: "20px 20px 500px rgba(0,0,0,0.1)" }}>
        <h2 style={{ textAlign: "center", paddingBottom: "20px" }}>Projects</h2>
      </div>

      <ProjectShowcase
        title="Note-ify"
        description="A note taking app that allows users to create, edit, and delete notes. Also implemented
        sorting, filtering, tagging, grouping, user auth and searching functionality."
        technologies={["ASP.NET Core", "C#", "Entity Framework Core", "PostgreSQL", "HTML", "CSS", "jQuery", "TypeScript"]}
        ghLink={"https://github.com/xyclose11/Notify"}
      />

      <ProjectShowcase
        title="Cash Money Citations"
        description="This was a project for a Full Stack Development course at Valparaiso University. The result of this project is a website that can handle citations in multiple formats.
        This project was completed in 15 weeks in a group of 4 students. I was responsible for the citation generation process, user authentication, the parsing of the citation data, BibTex error handling, and more.
        "
        technologies={["React", "Node.js", "Next.js", "MongoDB", "HTML", "CSS", "TypeScript"]}
        ghLink={"https://github.com/xyclose11/cashmoneycitations"}
      >
      </ProjectShowcase>

      <ProjectShowcase 
      title="Auction Commerce Website"
      technologies={["Django", "HTML", "CSS", "JavaScript"]}
      description="Created a website for a mock auction company using Django, that inlcudes a login page, product listings, and more."
      ghLink={"https://github.com/xyclose11/cautious-eureka"}
      />

      <ProjectShowcase
      title="Garden X"
      technologies={["Flask", "SQL", "Python", "Javascript", "HTML/CSS"]}
      description="Designed and implemented a web application that allows users to lookup a plant and get information about it. Uses Flash, SQL, Python, Javascript, and HTML/CSS. Submitted to CS50 as a final project."
      ghLink={"https://www.youtube.com/watch?v=MAhIyux1Ia0"}
      >
      </ProjectShowcase>

      <div style={{ background: "rgba(255,255,255,0.75)", boxShadow: "20px 20px 500px rgba(0,0,0,0.1)" }}>
        <h2 style={{ textAlign: "center", paddingBottom: "20px" }}>Smaller Projects/In Progress</h2>
      </div>

      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title} style={{ backgroundColor: "#f5f5f5", boxShadow: "0 0 5px rgba(0,0,0,0.1)" }}>
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
