import { Link } from "gatsby";
import React from "react";
import { cn } from "../lib/helpers";
import styles from "./punch-line.module.css";

const PunchLine = ({ text, description, isNumber }) => (
  <div className={styles.root}>
    <h2 className={cn(styles.text, isNumber ? styles.number : "")}>{text}</h2>
    <span className={styles.description}>{description}</span>
  </div>
);

PunchLine.defaultProps = {
  isNumber: false
};

export default PunchLine;
