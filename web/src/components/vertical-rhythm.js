import React from "react";
import { cn } from "../lib/helpers";
import styles from "./vertical-rhythm.module.css";

const VerticalRhythm = props => {
  const { verticalRhythm, children } = props;
  if (!verticalRhythm) {
    // return default rhythm
    return (
      <div className={styles.root} name={name}>
        {children}
      </div>
    );
  }
  const { top, bottom, inner } = verticalRhythm;
  // return custom rhythm
  const inlineStyle = {
    paddingTop: top + "em",
    paddingBottom: bottom + "em"
  };
  return (
    <div className={cn(styles.root, "inline-custom-rhythm")} name={name} style={inlineStyle}>
      {children}
    </div>
  );
};

VerticalRhythm.DefaultProps = {
  top: "",
  bottom: "",
  inner: false
};

export default VerticalRhythm;
