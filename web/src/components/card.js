import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";

import styles from "./card.module.css";

const Card = ({ title, description }) => (
  <div className={styles.root}>
    <h3 className={styles.title}>{title}</h3>
    <span>{description}</span>
  </div>
);

export default Card;
