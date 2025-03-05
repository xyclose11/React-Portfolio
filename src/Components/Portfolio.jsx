import React from "react";
import ProjectShowcase from "./ProjectShowcase";
import PaintPNG from "../images/Rotate.png";
import MelinIMG from "../images/Melin.png";
import MESSIMG from "../images/ProductionLogFailure.png";

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <div className="justify-center flex-col items-center max-w-md mx-auto">
        <h2 id="mywork" className="text-4xl mb-16 text-white border-1 rounded-3xl bg-hero-bg p-4 hover:bg-cyan-700">
          My Work
        </h2>
      </div>

      <ProjectShowcase
        title="MESS (Manufacturing Execution System Software)"
        description="Built a Manufacturing Execution System Software for a local manufacturing company. The software allows the company to track the progress of their products through the manufacturing process, by gathering various types of analytical data."
        technologies={[
          "ASP.NET Core",
          "C#",
          "Entity Framework Core",
          "MSSQL",
          "Blazor",
          "JavaScript",
          "HTML/CSS",
          "Nginx",
          "xUnit",
          "bUnit",
        ]}
        ghLink={"https://github.com/SensitTechnologies/MESS"}
      >
        <div>
          <figure className="relative max-w-full transition-all duration-300 cursor-pointer filter">
            <img src={MESSIMG} alt="Melin" className="h-auto w-full shadow-xl rounded-t-3xl" />
            <figcaption className="absolute px-4 text-lg text-white bottom-6">Paint</figcaption>
          </figure>
        </div>
      </ProjectShowcase>

      <ProjectShowcase
        title="Melin"
        description="An academic reference management applcaiton that allows users to create, edit, and delete references. Implemented PDF, and JSON parsing, alongside a custom barcode implementation that allows users to automatically scan a barcode and upload the reference data, using the mobile application. Also implemented sorting, filtering, tagging, grouping, user auth and searching functionality."
        technologies={[
          "ASP.NET Core",
          "C#",
          "Entity Framework Core",
          "PostgreSQL",
          "React.js",
          "TypeScript",
          "Jenkins",
          "HTML",
          "CSS",
          "Shadcn",
          "Docker",
          "JWT",
          "Swagger",
          "XUnit",
          "React Native",
          "Nginx",
        ]}
        ghLink={"https://github.com/xyclose11/Melin"}
      >
        <div>
          <figure className="relative max-w-full transition-all duration-300 cursor-pointer filter">
            <img src={MelinIMG} alt="Melin" className="h-auto w-full shadow-xl rounded-t-3xl" />
            <figcaption className="absolute px-4 text-lg text-white bottom-6">Paint</figcaption>
          </figure>
        </div>
      </ProjectShowcase>

      <ProjectShowcase
        title="Pain(t)"
        description="Reimplementation of Microsoft paint. Users are able to draw, erase, and save their drawings, along with a multitude of image manipulation tools such as 'select', 'crop', and more. This project was completed in 7 weeks for CS250: Object Oriented Programming at Valparaiso University."
        technologies={["Java", "JavaFX", "UML", "Maven", "JUnit"]}
        ghLink={"https://github.com/xyclose11/Paint"}
      >
        <div>
          <figure className="relative max-w-full transition-all duration-300 cursor-pointer filter">
            <img src={PaintPNG} alt="Melin" className="h-auto w-full shadow-xl rounded-t-3xl" />
            <figcaption className="absolute px-4 text-lg text-white bottom-6">Paint</figcaption>
          </figure>
        </div>
      </ProjectShowcase>

      <ProjectShowcase
        title="Citation Generator"
        description="A Full Stack application that will store and organize a users academic references. Can export into CSV, BibTex, CSL-JSON and over 10,000 citation styles.
        This project was completed in 15 weeks in a group of 4 students. I was responsible for the citation generation process, user authentication, the parsing of the citation data, BibTex error handling, and more.
        "
        technologies={["React", "Node.js", "Next.js", "MongoDB", "HTML", "CSS", "TypeScript"]}
        ghLink={"https://github.com/xyclose11/cashmoneycitations"}
      ></ProjectShowcase>
    </section>
  );
};

export default Portfolio;
