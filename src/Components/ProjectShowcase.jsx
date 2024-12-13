import React from "react";
import PropTypes from "prop-types";
import "../ProjectShowcase.css";
import githubIcon from "../images/socials/github.svg";

const gradientPatterns = [
  "from-hero-bg to-blue-500",
  "from-hero-bg to-green-500",
  "from-hero-bg to-yellow-500",
  "from-hero-bg to-red-500",
  "from-hero-bg to-indigo-500",
  "from-hero-bg to-purple-500",
  "from-hero-bg to-pink-500",
  "from-hero-bg to-cyan-500",
  "from-hero-bg to-rose-500",
  "from-hero-bg to-emerald-500",
  "from-hero-bg to-gray-500",
];

const getRandomGradient = () => {
  const randomIndex = Math.floor(Math.random() * gradientPatterns.length);
  return gradientPatterns[randomIndex];
};

const ProjectShowcase = ({ title, description, technologies, children, ghLink }) => {
  const randomGradient = getRandomGradient();

  return (
    <div className="project-showcase bg-white border-1 rounded-3xl">
      <div className="project-details p-4">
        <h2 className="mb-4 leading-none tracking-tight font-bold text-gray-800">{title}</h2>
        <p className="mb-3 text-gray-700">{description}</p>
        <h3 className="mb-2 text-4xl leading-none tracking-tight font-bold text-gray-800">
          Crafted With
        </h3>
        <ul className="flex flex-wrap gap-2 items-start justify-start text-gray-700">
          {technologies.map((tech, index) => (
            <li className="me-4 hover:underline md:me-6" key={index}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className="project-slideshow">
        <div className="project-image bg-white border-1 rounded-3xl">
          {children || (
            <img
              src="https://placehold.co/600x400/EEE/31343C?font=montserrat&text=Coming Soon..."
              alt="Project"
              className="rounded-t-3xl h-auto w-full shadow-xl"
            />
          )}
          <div
            className={`bg-gradient-to-r ${randomGradient} hover:bg-gradient-to-r p-4 rounded-b-3xl flex justify-center items-center`}
          >
            {ghLink && (
              <a className="" href={ghLink}>
                <img src={githubIcon} alt="GitHub" className="socialIcon" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectShowcase.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  ghLink: PropTypes.string,
  children: PropTypes.node,
};

export default ProjectShowcase;
