import React from "react";
import PropTypes from "prop-types";
import { cn } from "../lib/helpers";
import Svg from "../components/svg";
import GraphQLErrorList from "./graphql-error-list";

import styles from "./intro.module.css";
import { responsiveTitle1 } from "./typography.module.css";

const Intro = ({ name, title, text, margin, backButton, backTo }) => {
  if (!(title || text)) {
    return null;
  }

  return (
    <div className={cn(styles.root, margin ? styles.marginBottom : "")}>
      {name && (
        <span className={styles.name}>
          {backButton && (
            <a className={styles.backButton} href={backTo}>
              <Svg icon name="arrow-left-circle" />
            </a>
          )}
          {name}
        </span>
      )}
      {title && <h2 className={responsiveTitle1}>{title}</h2>}
      {text && <p>{text}</p>}
    </div>
  );
};

Intro.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  margin: PropTypes.bool
};

export default Intro;
