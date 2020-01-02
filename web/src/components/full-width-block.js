import React from "react";

import { cn } from "../lib/helpers";

import SvgProvider from "../components/svg-provider";
import styles from "./full-width-block.module.css";

const FullWidthBlock = ({
  children,
  svgDesign,
  svgType,
  svgSelection,
  svgPosition = "bottom",
  lessPadding = false,
  lessPaddingTop = false,
  lessPaddingBottom = false,
  hasGradient = false
}) => {
  return (
    <div className={styles.root}>
      <div className={cn(styles.extend, hasGradient ? styles.gradient : "")}>
        {svgDesign && (
          <SvgProvider svgType={svgType} svgSelection={svgSelection} svgPosition={svgPosition} />
        )}
        <div
          className={cn(
            styles.wrapper,
            lessPadding ? styles.lessPadding : "",
            lessPaddingTop ? styles.lessPaddingTop : "",
            lessPaddingBottom ? styles.lessPaddingBottom : ""
          )}
        >
          <div className={styles.flexController}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default FullWidthBlock;
