import React from "react";
import { cn } from "../lib/helpers";
import GraphQLErrorList from "../components/graphql-error-list";

import styles from "./block-intro.module.css";
import utils from "../components/utils.module.css";
import pages from "../components/pages.module.css";
import { responsiveTitle1 } from "../components/typography.module.css";

const BlockIntro = props => {
  if (!props) {
    return null;
  }
  const { name, title, text, marginBottom } = props;
  return (
    <div className={cn(styles.root, marginBottom ? styles.marginBottom : "")}>
      {name && <span className={styles.name}>{name}</span>}
      {title && <h2 className={responsiveTitle1}>{title}</h2>}
      {text && <p>{text}</p>}
    </div>
  );
};

// const BlockIntro = ({ name, title, subTitle = "", text, marginBottom = false }) => {
//   return (
//     <div className={cn(styles.root, marginBottom ? styles.marginBottom : "")}>
//       {name && <span className={utils.name}>{name}</span>}
//       {title && <h2 className={responsiveTitle1}>{title}</h2>}
//       {text && <p>{text}</p>}
//     </div>
//   );
// };

export default BlockIntro;
