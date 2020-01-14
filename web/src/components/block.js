import React from "react";
import { cn } from "../lib/helpers";
import VerticalRhythm from "../components/vertical-rhythm";
import styles from "./block.module.css";

// sytalaust: add prop blockOrder

const Block = ({ name, ...props }) => {
  const { borderBottom } = props;
  return (
    <div className={cn(styles.root, borderBottom ? styles.borderBottom : "")} name={name}>
      <VerticalRhythm {...props} />
    </div>
  );
};

export default Block;
