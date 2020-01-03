import React from "react";

import { cn } from "../lib/helpers";

import SvgProvider from "../components/svg-provider";
import styles from "./full-width-block.module.css";

const FullWidthBlock = ({
  children,
  svgDesign,
  designType,
  designSelection,
  designPosition = "bottom",
  colorTheme = "light",
  lessPadding = false,
  lessPaddingTop = false,
  lessPaddingBottom = false,
  hasGradient = false
}) => {
  return (
    <div className={styles.root}>
      <div
        className={cn(
          styles.extend,
          hasGradient ? styles.gradient : "",
          colorTheme === "light" ? styles.lightTheme : ""
        )}
      >
        {svgDesign && (
          <SvgProvider
            designType={designType}
            designSelection={designSelection}
            designPosition={designPosition}
            colorTheme={colorTheme}
          />
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
