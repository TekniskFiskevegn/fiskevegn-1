import React from "react";
import styles from "./block.module.css";

const Block = ({ name, blockOrder, verticalRhythm, fullWidth, children }) => {
  return (
    <div className={styles.root} name={name}>
      {children}
    </div>
  );
};

export default Block;
