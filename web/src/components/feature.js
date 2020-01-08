import { Link } from "gatsby";
import React from "react";
import { cn } from "../lib/helpers";
import styles from "./feature.module.css";

const Feature = ({ text, description, isNumber }) => (
  <div className={styles.root}>
    <h2 className={cn(styles.text, isNumber ? styles.number : "")}>{text}</h2>
    <span className={styles.description}>{description}</span>
  </div>
);

Feature.defaultProps = {
  isNumber: false
};

export default Feature;
