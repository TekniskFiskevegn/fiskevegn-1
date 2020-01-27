import React from "react";

import { cn } from "../lib/helpers";
import { getWave, getBlob, getIcon } from "../lib/svg-provider";
import styles from "./svg.module.css";

const Svg = ({ icon, wave, blob, name, number, positionTop, adjustToParent }) => {
  if (icon) {
    return (
      <i className={cn(styles.icon, adjustToParent ? styles.adjustToParent : "")}>
        {getIcon(name)}
      </i>
    );
  }
  if (wave) {
    const cssClass = cn(styles.wave, positionTop ? styles.positionTop : styles.positionBottom);
    return getWave(number, cssClass);
  }
  if (blob) {
    console.log("blob", blob);
    const { blobIcon, blobTitle, asBackground } = blob;
    const name = blobIcon;
    if (asBackground) {
      console.log("blob as background");
      const inlineStyle = {
        backgroundImage: `url("/blobs/blob-${number}.svg")`
      };
      return <div className={cn(styles.blob, styles.blobAsBackground)} style={inlineStyle}></div>;
    }
    return <div className={styles.blob}>{getBlob(number)}</div>;
  }
  return null;
};

export default Svg;
