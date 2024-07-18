import React from 'react';
import PropTypes from 'prop-types';
import Container from './Components';
// Import slideshow library or write custom CSS/JS for slideshow if needed

const ProjectShowcase = ({ title, description, technologies, learnings, screenshots, children, ghLink }) => {
  return (
    <div style={{ display: 'flex', margin: '20px', padding: '10px' }}>
      <div style={{ flex: 1, padding: '10px', backgroundColor:"white", borderRadius: "10px" }}>

        <h2>{title}</h2>
        <p>{description}</p>
        <h3>Technologies Used:</h3>
        <ul>
          {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <h3>What I Learned:</h3>
        <p>{learnings}</p>
      </div>
      <div style={{ flex: 1, padding: '10px' }}>
        {/* Placeholder for slideshow. Implement or integrate a slideshow component here */}
        <div>Slideshow Placeholder</div>
        {children}
        <footer style={{ color: "white", alignSelf: "center", marginTop: "auto" }}>
        {ghLink && (
          <a href={ghLink} style={{ display: "inline-block", padding: "10px 15px", backgroundColor: `black`, color: "white", textDecoration: "none", borderRadius: "5px", marginTop: "10px" }} target="_blank" rel="noopener noreferrer">
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
  learnings: PropTypes.string.isRequired,
  screenshots: PropTypes.arrayOf(PropTypes.string), // Assuming screenshots are URLs to images
  ghLink: PropTypes.string,
  ytLink: PropTypes.instanceOf(Object), // Assuming ytLink is an object with a URL and a title
  children: PropTypes.node
};

export default ProjectShowcase;