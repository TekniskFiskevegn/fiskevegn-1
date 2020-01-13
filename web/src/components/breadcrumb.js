import { Link } from "gatsby";
import React from "react";
import Svg from "../components/svg";
import { cn } from "../lib/helpers";

import styles from "./breadcrumb.module.css";
import utils from "../components/utils.module.css";

const Card = ({ add, withCloseButton, goBack }) => {
  return (
    <div className={styles.root}>
      <div className={styles.breadcrumbs}>
        <Link to={goBack}>Go back</Link>
      </div>
    </div>
  );
};

Card.DefaultProps = {
  add: false,
  withCloseButton: false
};

export default Card;
