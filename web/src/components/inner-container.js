import React from "react";
import { cn } from "../lib/helpers";
import styles from "./inner-container.module.css";

const InnerContainer = props => {
  if (!props) {
    return null;
  }

  const { children, borderBottom } = props;
  return <div className={cn(styles.root, borderBottom ? styles.borderBottom : "")}>{children}</div>;
};

InnerContainer.defaultProps = {};

export default InnerContainer;
