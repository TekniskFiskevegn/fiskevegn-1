import React from "react";

import { cn } from "../lib/helpers";

import SvgProvider from "../components/svg-provider";
import styles from "./full-width-block.module.css";

const FullWidthBlock = ({
  children,
  svgShape,
  svgType,
  svgSelection,
  svgPosition = "bottom",
  lessSpacious = false,
  hasGradient = false
}) => {
  return (
    <div className={styles.root}>
      <div className={cn(styles.extend, hasGradient ? styles.gradient : "")}>
        {svgShape && (
          <SvgProvider svgType={svgType} svgSelection={svgSelection} svgPosition={svgPosition} />
        )}
        <div
          className={cn(
            styles.wrapper,
            lessSpacious ? styles.lessPaddingTopAndBottom : "",
            svgShape && svgPosition === "bottom" ? styles.lessPaddingBottom : ""
          )}
        >
          <div className={styles.flexController}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default FullWidthBlock;
