import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";

import styles from "./breadcrumb.module.css";
import utils from "../components/utils.module.css";

const Card = ({ add, withCloseButton }) => {
  return (
    <div className={styles.root}>
      <div className={styles.breadcrumbs}>
        <a href="">Products</a>/<a href="">Fishery</a> /
        {add && <a href="">Automatic longline systems</a>}
      </div>
    </div>
  );
};

Card.DefaultProps = {
  add: false,
  withCloseButton: false
};

export default Card;
