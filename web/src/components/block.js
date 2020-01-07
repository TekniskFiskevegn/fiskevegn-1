import React from "react";
import BlockIntro from "../components/block-intro";
import VerticalFlow from "../components/block-default";
import styles from "./block.module.css";

const Block = ({ name, blockOrder, verticalRhythm, fullWidth, children }) => {
  return (
    <div className={styles.root} name={name}>
      {children}
    </div>
  );
};

export default Block;
