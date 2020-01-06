import React from "react";

import { cn } from "../lib/helpers";
import { getWaves } from "../lib/svg";
import styles from "./svg-provider.module.css";

const SvgProvider = ({ type, ...props }) => {
  if (!type) {
    return <p>Specify svg type</p>;
  }
  switch (type) {
    case "wave":
      return wave({ ...props });
    default:
      return <p>Specify correct svg type</p>;
  }
};

const wave = ({ selection, position = "bottom" }) => {
  const cssClass = cn(
    styles.wave,
    position === "bottom" ? styles.positionBottom : styles.positionTop
  );
  return getWaves(selection, cssClass);
};

export default SvgProvider;
