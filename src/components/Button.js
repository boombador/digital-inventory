import React from "react";
import classnames from "classnames";

const Button = ({ onClick, text, children, className, ...rest }) => (
  <button
    onClick={onClick}
    className={classnames("pure-button", className)}
    {...rest}
  >
    {text || children}
  </button>
);

export default Button;
