import React from "react";
import PropTypes from "prop-types";
import { cn } from "../lib/helpers";
import styles from "./inner-container.module.css";

const InnerContainer = props => {
  if (!props) {
    return null;
  }

  const { children } = props;
  return <div className={styles.root}>{children}</div>;
};

InnerContainer.defaultProps = {};

InnerContainer.propTypes = {
  example: PropTypes.string
};

export default InnerContainer;
