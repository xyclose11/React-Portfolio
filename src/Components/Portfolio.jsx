import React from "react";
import ProjectShowcase from "./ProjectShowcase";
import Container from "./Components";

const projectList = [
  {
    title: "Portfolio Website",
    description:
      "Created a portfolio website using React, that showcases my projects and skills.",
    url: "https://github.com/xyclose11/React-Portfolio", // Update with your project URL or GitHub project page or make a new react page that displays it
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
      "Created a router using a Raspberry Pi 4 and OpenWRT, to allow my home network to have more control over the network. This also allowed me to implement SQM.",
    url: "",
  },
  {
    title: "MPI, OpenMP, and CUDA Parallel Programming Projects",
    description:
      "Created a variety of projects that use MPI, OpenMP, and CUDA to parallelize code. These projects include a 2D heat transfer simulation, a 2D wave simulation, and a 3D heat transfer simulation.",
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
        learnings="Since this was my first project with ASP.NET Core, I wanted to focus more on the backend and less on the frontend, since I 
        already have a decent chunk of frontend (TypeScript) experience."
        technologies={["ASP.NET Core", "C#", "Entity Framework Core", "PostgreSQL", "HTML", "CSS", "jQuery", "TypeScript"]}
        ghLink={"https://github.com/xyclose11/Notify"}
      />

      <ProjectShowcase
        title="Cash Money Citations"
        description="This is a project for CS 490: Full Stack Development at Valparaiso University. The result of this project is a website that can handle citations in multiple formats. For a comparison of what this web application is supposed to resemble, please look at Zotero, Mendeley, and/or OneNote.
        This project was completed in 15 weeks in a group of 4 students. I was responsible for the main citation generation process, the bulk of user authentication, the parsing of the citation data, BibTex error handling, and more.
        "
        technologies={["React", "Node.js", "Next.js", "MongoDB", "HTML", "CSS", "TypeScript"]}
        learnings="This project was my first time working in a team, which lead to a lot of unknown experiences and challenges. I learned how to work with others
        and how to communicate effectively."
        ghLink={"https://github.com/xyclose11/cashmoneycitations"}
      >
        <iframe width="600" height="350" src="https://www.youtube.com/embed/cPxhlyVQGtA" title="Citation Clone Project (CMC) | Next.js, React, MongoDB" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </ProjectShowcase>

      <ProjectShowcase 
      title="Auction Commerce Website"
      technologies={["Django", "HTML", "CSS", "JavaScript"]}
      description="Created a website for a mock auction company using Django, that inlcudes a login page, product listings, and more!"
      learnings="Learned how to use Django to create a full stack web application."
      ghLink={"https://github.com/xyclose11/cautious-eureka"}
      />

      <ProjectShowcase
      title="Garden X"
      technologies={["Flask", "SQL", "Python", "Javascript", "HTML/CSS"]}
      description="Designed and implemented a web application that allows users to lookup a plant and get information about it. Uses Flash, SQL, Python, Javascript, and HTML/CSS. Submitted to CS50 as a final project."
      learnings="Learned how to use Flask to create a full stack web application."
      ghLink={"https://www.youtube.com/watch?v=MAhIyux1Ia0"}
      >
        <iframe width="600" height="350" src="https://www.youtube.com/embed/MAhIyux1Ia0?si=--DtyhBuEx1AxrJN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </ProjectShowcase>

      <div style={{ background: "rgba(255,255,255,0.75)", boxShadow: "20px 20px 500px rgba(0,0,0,0.1)" }}>
        <h2 style={{ textAlign: "center", paddingBottom: "20px" }}>Smaller Projects/In Progress</h2>
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
