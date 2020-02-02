import React from "react";

const Button = ({ onClick, text, children }) => (
  <button className="pure-button" onClick={onClick}>
    {text || children}
  </button>
);

export default Button;
