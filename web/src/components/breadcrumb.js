import { Link } from "gatsby";
import React from "react";
import { cn } from "../lib/helpers";
import styles from "./breadcrumb.module.css";

const Card = ({ goBack }) => {
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
