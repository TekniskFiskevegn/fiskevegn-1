import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";

import styles from "./punch-line.module.css";

const PunchLine = ({ text, description }) => (
  <div className={styles.root}>
    <h2 className={styles.text}>{text}</h2>
    <span className={styles.description}>{description}</span>
  </div>
);

export default PunchLine;
