import React from "react";
import PropTypes from "prop-types";
import { cn } from "../lib/helpers";
import styles from "./example-component.module.css";

const Link = props => {
  if (!props) {
    return null;
  }

  const { callToAction, href } = props;
  return <a className={styles.root}>Example</a>;
};

Link.defaultProps = {};

export default Link;
