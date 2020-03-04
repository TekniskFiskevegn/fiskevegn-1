import React from "react";
import { buildImageObj, cn } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import Svg from "./svg";

import styles from "./design.module.css";

const Design = ({
  svg,
  children,
  backgroundImage,
  opacity,
  split,
  flex,
  light,
  gradient,
  isStatic
}) => {
  if (backgroundImage) {
    let img;
    if (backgroundImage.asset) {
      img = imageUrlFor(buildImageObj(backgroundImage))
        .width(1800)
        .height(Math.floor((9 / 16) * 1800))
        .fit("crop")
        .url();
    } else {
      img = backgroundImage;
    }

    const inlineStyle = {
      backgroundImage: `url(${img})`
    };
    return (
      <div
        className={cn(
          styles.root,
          styles.backgroundImage,
          opacity == "015" ? styles.opacity015 : "",
          opacity == "025" ? styles.opacity025 : "",
          opacity == "050" ? styles.opacity050 : "",
          opacity == "065" ? styles.opacity065 : "",
          opacity == "075" ? styles.opacity075 : "",
          opacity == "085" ? styles.opacity085 : "",
          opacity == "090" ? styles.opacity090 : "",
          flex ? styles.flex : ""
        )}
        style={inlineStyle}
      >
        {split && <div className={styles.splitLeft}></div>}
        {split && <div className={styles.splitRight}></div>}
        {svg && <Svg {...svg} />}
        {children}
      </div>
    );
  }

  return (
    <div className={cn(styles.root, light ? styles.light : "", gradient ? styles.gradient : "")}>
      {svg && <Svg {...svg} />}
      {children}
    </div>
  );
};

Design.DefaultProps = {
  backgroundImage: false
};

export default Design;
