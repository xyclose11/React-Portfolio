import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ size, children }) => {
  const containerStyle = {
    borderRadius: "10px",
    padding: "10px",
    backgroundColor: "#2b3773",
    justifyContent: "center",
    alignItems: "center",
    width: size === "small" ? "200px" : size === "medium" ? "325px" : "600px",
};

  return <div style={containerStyle}>{children}</div>;
};

Container.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  children: PropTypes.node,
};

export default Container;
