import React from "react";
import BlockIntro from "../components/block-intro";
import BlockFullWidth from "../components/block-full-width";
import styles from "./block.module.css";

const Block = ({ intro = null, fullWidth = null, children }) => (
  <div className={styles.root}>
    {intro !== null && <BlockIntro {...intro} />}
    {fullWidth !== null && <BlockFullWidth {...fullWidth} children={children} />}
    {fullWidth === null && <p>not fullwidth</p>}
  </div>
);

export default Block;
