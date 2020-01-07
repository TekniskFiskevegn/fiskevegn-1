import React from "react";
import { cn } from "../lib/helpers";
import BlockIntro from "../components/block-intro";
import styles from "./block-default.module.css";

const BlockDefault = ({ intro, svg, children }) => {
  return (
    <div className={styles.root}>
      {intro && <BlockIntro {...intro} />}
      {children}
    </div>
  );
};

export default BlockDefault;
