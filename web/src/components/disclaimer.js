import React from "react";

import styles from "./disclaimer.module.css";

const Disclaimer = props => {
  return (
    <div className={styles.root}>
      <p>
        <span>Copyright 2020 AS Fiskevegn. Website by WeBeyond</span>
      </p>
    </div>
  );
};

Disclaimer.DefaultProps = {};

export default Disclaimer;
