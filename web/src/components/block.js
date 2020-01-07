import React from "react";
import BlockIntro from "../components/block-intro";
import BlockFullWidth from "../components/block-full-width";
import BlockDefault from "../components/block-default";
import styles from "./block.module.css";

const Block = ({ type, name, blockOrder, ...props }) => {
  if (!type) {
    return <p>Specify block type</p>;
  }
  return (
    <div className={styles.root}>
      {type === "fullWidth" && <BlockFullWidth {...props} />}
      {type === "default" && <BlockDefault {...props} />}
    </div>
  );
};

export default Block;
