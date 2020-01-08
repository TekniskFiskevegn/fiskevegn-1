import React from "react";
import VerticalRhythm from "../components/vertical-rhythm";
import styles from "./block.module.css";

// sytalaust: add prop blockOrder

const Block = ({ name, ...props }) => {
  return (
    <div className={styles.root} name={name}>
      <VerticalRhythm {...props} />
    </div>
  );
};

export default Block;
