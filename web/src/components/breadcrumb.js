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
        <a href="" className={styles.home}>
          Home
        </a>
        /<a href="">Products</a>/<a href="">Fishery</a>
        {add && <a href="">Longlining</a>}
      </div>
      <div>close me</div>
    </div>
  );
};

Card.DefaultProps = {
  add: false,
  withCloseButton: false
};

export default Card;
