import React from "react";

import { buildImageObj, cn } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

import List from "../components/list";
import Card from "../components/card";
import SvgProvider from "../components/svg-provider";

import utils from "./utils.module.css";
import styles from "./full-width-block.module.css";

const FullWidthBlock = ({
  children,
  lessSpacious = false,
  isShaped,
  shapeType,
  shapeNumber,
  shapePosition = "bottom"
}) => {
  console.log("full-width-block.js", children);

  return (
    <div className={styles.root}>
      <div className={styles.extend}>
        {isShaped && (
          <SvgProvider
            svgType={shapeType}
            shapeNumber={shapeNumber}
            shapePosition={shapePosition}
          />
        )}
        <div
          className={cn(
            styles.wrapper,
            lessSpacious ? styles.lessPaddingTopAndBottom : "",
            isShaped && shapePosition === "bottom" ? styles.lessPaddingBottom : ""
          )}
        >
          <div className={styles.flexController}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default FullWidthBlock;
