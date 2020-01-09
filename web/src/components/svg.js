import React from "react";

import { cn } from "../lib/helpers";
import { getWave, getBlob, getIcon } from "../lib/svg-provider";
import styles from "./svg.module.css";

const Svg = ({ icon, wave, blob, name, number, positionTop }) => {
  if (icon) return getIcon(name);
  if (wave) {
    const cssClass = cn(styles.wave, positionTop ? styles.positionTop : styles.positionBottom);
    return getWave(number, cssClass);
  }
  if (blob) return getBlob();
  return null;
};

// const wave = ({ selection, position = "bottom" }) => {
//   const cssClass = cn(
//     styles.wave,
//     position === "bottom" ? styles.positionBottom : styles.positionTop
//   );
//   return getWave(selection, cssClass);
// };

// const icon = ({ name }) => {
//   console.log("icon", name);
//   // const cssClass = cn(styles.blob);
//   return getIcon(name);
// };

// const blob = ({ selection, imgSrc }) => {
//   console.log("blob selection", selection);
//   const cssClass = cn(styles.blob);
//   return getBlob(selection, imgSrc, cssClass);
// };

export default Svg;
