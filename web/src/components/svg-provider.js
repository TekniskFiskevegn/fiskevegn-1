import React from "react";

import { cn } from "../lib/helpers";
import { getWaves } from "../lib/svg";
import styles from "./svg-provider.module.css";

const SvgProvider = ({ svgType = null, svgSelection, svgPosition, iconName = null }) => {
  switch (svgType) {
    case "wave":
      return wave(svgSelection, svgPosition);
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

const wave = (svgSelection, svgPosition = "bottom") => {
  const cssClass = cn(
    styles.wave,
    svgPosition === "bottom" ? styles.positionBottom : styles.positionTop
  );
  const fill = "#F3F4F5";
  const fillOpacity = "1";
  return getWaves(svgSelection, cssClass, fill, fillOpacity);
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
