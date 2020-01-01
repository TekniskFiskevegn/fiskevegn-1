import React from "react";

import { buildImageObj, cn } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

import List from "../components/list";
import Card from "../components/card";
import SvgProvider from "../components/svg-provider";

import utils from "./utils.module.css";
import styles from "./full-width-block-final.module.css";

const FullWidthBlock = ({
  children,
  isSpacious,
  isShaped,
  shapeType,
  shapeNumber,
  shapePosition
}) => {
  console.log("full-width-block.js");

  return (
    <div className={styles.root}>
      <div className={styles.extend}>
        {isShaped && (
          <SvgProvider
            shapeType={shapeType}
            shapeNumber={shapeNumber}
            shapePosition={shapePosition}
          />
        )}
        <div className={cn(styles.wrapper, isSpacious ? styles.spacious : "")}>
          <div className={styles.flexController}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default FullWidthBlock;
