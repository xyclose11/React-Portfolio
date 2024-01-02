/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/raspberry_pi.jpg";

const imageAltText = "Image of a rustic wooden desk with a laptop, and a raspberry pi";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
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
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
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
