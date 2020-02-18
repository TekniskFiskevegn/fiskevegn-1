import React from "react";
import { cn } from "../lib/helpers";
import styles from "./feature.module.css";
import typography from "./typography.module.css";

const Feature = props => {
  return (
    <div className={styles.root}>
      <h2 className={cn(typography.responsiveTitle2, styles.title)}>{props.title}</h2>
      <span className={styles.text}>{props.text}</span>
    </div>
  );
};

Feature.DefaultProps = {};

export default Feature;
