import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({children, link}) => {
  return (
    <a className="button" href={link} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

Button.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
