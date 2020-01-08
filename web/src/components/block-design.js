import React from "react";
import { cn } from "../lib/helpers";
import VerticalFlow from "./vertical-flow";
import BlockIntro from "./block-intro";
import SvgProvider from "./svg-provider";
import styles from "./block-design.module.css";

const BlockDesign = ({ intro, svg, children, backgroundImage }) => {
  let customStyle;
  if (backgroundImage) {
    customStyle = {
      backgroundImage: `url(${backgroundImage})`
    };
  }

  return (
    <div className={styles.root}>
      {svg && <SvgProvider {...svg} />}
      {children}
    </div>
  );
};

BlockDesign.DefaultProps = {
  backgroundImage: false
};

export default BlockDesign;

{
  /* <div
        className={cn(styles.extend, backgroundImage ? styles.backgroundImage : "")}
        style={customStyle}
      >
        {svg && <SvgProvider {...svg} />}
        <div className={styles.wrapper}>
          <VerticalFlow>
            <div className={styles.flexController}>
              {intro && <BlockIntro {...intro} />}
              {children}
            </div>
          </VerticalFlow>
        </div>
      </div> */
}
