import React from "react";
import { Link } from "gatsby";
import Svg from "../components/svg";
import { FiArrowLeft } from "react-icons/fi";
import { TiArrowLeft } from "react-icons/ti";

import styles from "./go-back.module.css";

const GoBack = props => {
  return (
    <Link to={props.href} className={styles.root}>
      <div className={styles.iconBody}>
        {/* <FiArrowLeft /> */}
        <TiArrowLeft />
      </div>
    </Link>
  );
};

GoBack.DefaultProps = {};

export default GoBack;
