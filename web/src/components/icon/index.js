import React from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Icon(props) {
  switch (props.symbol) {
    case "hamburger":
      return <FiMenu />;
    case "close":
      return <FiX />;
    default:
      return <span>Unknown icon: {props.symbol}</span>;
  }
}

export default Icon;
