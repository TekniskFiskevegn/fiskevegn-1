import React from "react";
import { cn } from "../lib/helpers";
import Svg from "./svg";
import styles from "./block-design.module.css";

// @ sytalaust: add support for images in svg

const BlockDesign = ({ svg, children, bgImage, opacityClass }) => {
  if (bgImage) {
    console.log("opacityclass", opacityClass);
    const inlineStyle = {
      backgroundImage: `url(${bgImage})`
    };
    return (
      <div
        className={cn(
          styles.root,
          styles.bgImage,
          opacityClass == "small" ? styles.opacitySmall : "",
          opacityClass == "medium" ? styles.opacityMedium : "",
          opacityClass == "large" ? styles.opacityLarge : ""
        )}
        style={inlineStyle}
      >
        {svg && <Svg {...svg} />}
        {children}
      </div>
    );
  }

  return (
    <div className={styles.root}>
      {svg && <Svg {...svg} />}
      {children}
    </div>
  );
};

BlockDesign.DefaultProps = {
  bgImage: false
};

export default BlockDesign;
