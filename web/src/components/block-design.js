import React from "react";
import { cn } from "../lib/helpers";
import Svg from "./svg";
import styles from "./block-design.module.css";

const BlockDesign = ({ svg, children, bgImage, opacityClass, split, flex, light, gradient }) => {
  if (bgImage) {
    const inlineStyle = {
      backgroundImage: `url(${bgImage})`
    };
    return (
      <div
        className={cn(
          styles.root,
          styles.bgImage,
          opacityClass == "015" ? styles.opacity015 : "",
          opacityClass == "025" ? styles.opacity025 : "",
          opacityClass == "050" ? styles.opacity050 : "",
          opacityClass == "065" ? styles.opacity065 : "",
          opacityClass == "075" ? styles.opacity075 : "",
          opacityClass == "085" ? styles.opacity085 : "",
          opacityClass == "090" ? styles.opacity090 : "",
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

BlockDesign.DefaultProps = {
  bgImage: false
};

export default BlockDesign;
