import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";

import styles from "./horizontal-list.module.css";

const HorizontalList = ({ children }) => (
  <ul className={styles.root}>
    {React.Children.map(children, (child, i) => {
      return <li>{child}</li>;
    })}
  </ul>
);

export default HorizontalList;
