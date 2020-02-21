import React from "react";
import { cn } from "../lib/helpers";
import styles from "./disclaimer.module.css";
import typography from "./typography.module.css";

const Disclaimer = props => {
  return (
    <div className={styles.root}>
      <p>
        <span>Copyright 2020 AS Fiskevegn</span>
        <span>
          Also availiable in <a href="">Norwegian</a>
        </span>
        <span>
          Website made by <a href="">WeBeyond</a>
        </span>
      </p>
    </div>
  );
};

Disclaimer.DefaultProps = {};

export default Disclaimer;
