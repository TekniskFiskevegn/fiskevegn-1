import React from "react";
import { cn } from "../lib/helpers";
import styles from "./key-number.module.css";

const KeyNumber = ({ number, description }) => (
  <div className={styles.root}>
    <h2 className={styles.number}>{number}</h2>
    <span className={styles.description}>{description}</span>
  </div>
);

export default KeyNumber;
