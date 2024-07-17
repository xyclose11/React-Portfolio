import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ size, children, backgroundColor, backgroundImage, webLink, header, body, buttonColor }) => {
  const containerStyle = {
    borderRadius: "10px",
    padding: "10px",
    backgroundColor: backgroundColor || "#2b3773",
    justifyContent: "center",
    backgroundImage: backgroundImage || "none",
    alignItems: "center",
    "text-align": "center",
    width: size === "small" ? "200px" : size === "medium" ? "325px" : "600px",
};


  return (
    <div style={containerStyle}>

      <h3 style={{ color: "white" }}>{header}</h3>
      <p style={{ color: "white" }}>{body}</p>
      {children}

      <footer style={{ color: "white" }}>
        {webLink && (
        <a href={webLink} style={{ display: "inline-block", padding: "10px 15px", backgroundColor: `${buttonColor}`, color: "white", textDecoration: "none", borderRadius: "5px", marginTop: "10px" }} target="_blank" rel="noopener noreferrer">
          Visit: {webLink.split("www.")[1].split(".")[0]}      
        </a>
        )}
      </footer>
    </div>
  );
};

Container.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.string,
  webLink: PropTypes.string,
  header: PropTypes.string,
  body: PropTypes.string,
  footer: PropTypes.string,
  buttonColor: PropTypes.string
};

export default Container;
