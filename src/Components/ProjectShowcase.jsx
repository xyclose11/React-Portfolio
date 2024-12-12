import React from 'react';
import PropTypes from 'prop-types';
import '../ProjectShowcase.css';

const ProjectShowcase = ({ title, description, technologies, children, ghLink, thumbNail }) => {
  return (
    <div className="project-showcase">
      <div className="project-details">
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>Technologies Used:</h3>
        <ul>
          {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
      <div className="project-slideshow">
        {children}
        <footer className="project-footer">
          {ghLink && (
            <a href={ghLink} target="_blank" rel="noopener noreferrer">
              More Info
            </a>
          )}
        </footer>
      </div>
    </div>
  );
};

ProjectShowcase.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  ghLink: PropTypes.string,
  children: PropTypes.node
};

export default ProjectShowcase;