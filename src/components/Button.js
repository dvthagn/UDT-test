import React, { useContext } from "react";

const getStyleName = (value) => {
  const className = {
    "=": "equals",
    0: "zero",
    x: "opt",
    "-": "opt",
    "+": "opt",
    "÷": "opt",
    AC: "gray",
    "+/-": "gray",
    "%": "gray",
  };
  return className[value];
};

const Button = ({ value }) => {
  return <div className={`${getStyleName(value)} button`}>{value}</div>;
};

export default Button;