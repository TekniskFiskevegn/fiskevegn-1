import React from "react";
import styles from "./feature.module.css";

const Feature = props => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{props.title}</h2>
      <span className={styles.text}>{props.text}</span>
    </div>
  );
};

Feature.DefaultProps = {};

export default Feature;
