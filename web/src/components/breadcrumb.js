import { Link } from "gatsby";
import React from "react";
import styles from "./breadcrumb.module.css";

const BreadCrumb = ({ goBack }) => {
  return (
    <div className={styles.root}>
      <div className={styles.breadcrumbs}>
        <Link to={goBack}>Go back</Link>
      </div>
    </div>
  );
};

BreadCrumb.DefaultProps = {
  add: false,
  withCloseButton: false
};

export default BreadCrumb;
