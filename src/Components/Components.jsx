import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ size, children, backgroundColor, backgroundImage }) => {
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

  return <div style={containerStyle}>{children}</div>;
};

Container.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.string,
};

export default Container;
