import React from "react";
import { cn } from "../lib/helpers";
import GraphQLErrorList from "../components/graphql-error-list";

import styles from "./block-intro.module.css";
import utils from "../components/utils.module.css";
import pages from "../components/pages.module.css";
import { responsiveTitle1 } from "../components/typography.module.css";

const BlockIntro = props => {
  const { marginBottom = false, tinyTitle, title, text, subTitle } = props;
  return (
    <div className={cn(styles.root, marginBottom ? styles.marginBottom : "")}>
      {tinyTitle && <span className={utils.tinyTitle}>{tinyTitle}</span>}
      {title && <h2 className={responsiveTitle1}>{title}</h2>}
      {subTitle && <h3 className={utils.subTitle}>{subTitle}</h3>}
      {text && <p>{text}</p>}
    </div>
  );
};

export default BlockIntro;
