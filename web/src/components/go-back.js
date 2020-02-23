import React from "react";
import { Link } from "gatsby";
import Svg from "../components/svg";

import styles from "./go-back.module.css";

// Todo:
// Use Link instead

const GoBack = props => {
  return (
    <Link to={props.href} className={styles.root}>
      <Svg adjustToParent icon name="arrow-left-circle" />
    </Link>
  );
};

GoBack.DefaultProps = {};

export default GoBack;
