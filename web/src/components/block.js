import React from "react";
import { cn } from "../lib/helpers";
import VerticalRhythm from "../components/vertical-rhythm";
// comment
import styles from "./block.module.css";

const Block = ({ name, ...props }) => {
  const { borderBottom } = props;
  return (
    <div className={cn(styles.root, borderBottom ? styles.borderBottom : "")} name={name}>
      <VerticalRhythm {...props} />
    </div>
  );
};

export default Block;
