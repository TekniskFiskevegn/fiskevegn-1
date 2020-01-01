import React from "react";

import GraphQLErrorList from "../components/graphql-error-list";

import styles from "./block-intro.module.css";
import utils from "../components/utils.module.css";
import pages from "../components/pages.module.css";
import { responsiveTitle1 } from "../components/typography.module.css";

const BlockIntro = props => {
  const { tinyTitle, title, text } = props;
  return (
    <div className={styles.root}>
      {tinyTitle && <span className={utils.tinyTitle}>{tinyTitle}</span>}
      {title && <h2 className={responsiveTitle1}>{title}</h2>}
      {text && <p>{text}</p>}
    </div>
  );
};

export default BlockIntro;
