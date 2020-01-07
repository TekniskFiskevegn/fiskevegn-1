import React from "react";
import { cn } from "../lib/helpers";
import VerticalFlow from "../components/vertical-flow";
import BlockIntro from "../components/block-intro";
import SvgProvider from "../components/svg-provider";
import styles from "./block-full-width.module.css";

const BlockFullWidth = ({ intro, svg, children }) => {
  return (
    <div className={styles.root}>
      <div className={cn(styles.extend)}>
        {svg && <SvgProvider {...svg} />}
        <div className={styles.wrapper}>
          <VerticalFlow customValues={{ top: 4, bottom: 5 }}>
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

export default BlockFullWidth;
