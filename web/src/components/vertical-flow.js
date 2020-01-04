import React from "react";
import { cn } from "../lib/helpers";
import styles from "./vertical-flow.module.css";

const VerticalFlow = ({ children, space = null }) => {
  if (space !== null) {
    const { top, bottom } = space;
    const style =
      top && bottom
        ? { paddingTop: top + "em", paddingBottom: bottom + "em" }
        : "" || top
        ? { paddingTop: top + "em" }
        : "" || bottom
        ? { paddingBottom: bottom + "em" }
        : "";
    return (
      <div className={cn(styles.root, styles.custom)} style={style}>
        {children}
      </div>
    );
  } else {
    return <div className={cn(styles.root)}>{children}</div>;
  }
};

export default VerticalFlow;
