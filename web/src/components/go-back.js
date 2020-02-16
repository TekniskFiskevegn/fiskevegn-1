import React from "react";
import { Link } from "gatsby";
import Svg from "../components/svg";
import styles from "./go-back.module.css";

// Todo:
// Use Link instead

const GoBack = props => {
  return (
    <a className={styles.root} href={props.href}>
      <Svg adjustToParent icon name="arrow-left-circle" />
    </a>
  );
};

GoBack.DefaultProps = {};

export default GoBack;
