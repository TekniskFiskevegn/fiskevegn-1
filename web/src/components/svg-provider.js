import React from "react";

import { cn } from "../lib/helpers";
import { getWaves } from "../lib/svg";
import styles from "./svg-provider.module.css";

const SvgProvider = ({
  designType = null,
  designSelection,
  designPosition = "bottom",
  iconName = null,
  colorTheme = "lightTheme"
}) => {
  switch (designType) {
    case "wave":
      return wave(designSelection, designPosition, colorTheme);
    // case "angle":
    //   return angle(selection);
    // case "circle":
    //   return circle(selection);
    // case "icon":
    //   return icon(iconName);
    default:
      return <p>Please specify desired props for SvgProvider</p>;
  }
};

const wave = (designSelection, designPosition, colorTheme) => {
  // todo: add colortheme
  const cssClass = cn(
    styles.wave,
    designPosition === "bottom" ? styles.positionBottom : styles.positionTop
  );
  return getWaves(designSelection, cssClass);
};

const angle = ({ selection }) => {
  return <p>angle</p>;
};

const circle = ({ selection }) => {
  return <p>circle</p>;
};

const icon = () => {
  return <p>circle</p>;
};

export default SvgProvider;
