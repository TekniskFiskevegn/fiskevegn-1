import React from "react";
import { cn } from "../lib/helpers";
import VerticalFlow from "../components/vertical-flow";
import BlockIntro from "../components/block-intro";
import SvgProvider from "../components/svg-provider";
import styles from "./block-full-width.module.css";

const BlockFullWidth = ({ intro, svg, children, backgroundImage }) => {
  let customStyle;
  if (backgroundImage) {
    customStyle = {
      backgroundImage: `url(${backgroundImage})`
    };
  }

  return (
    <div className={styles.root}>
      <div
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
      </div>
    </div>
  );
};

BlockFullWidth.DefaultProps = {
  backgroundImage: false
};

export default BlockFullWidth;
