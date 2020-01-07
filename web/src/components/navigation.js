import React from "react";
import PropTypes from "prop-types";
import { cn } from "../lib/helpers";
import VerticalFlow from "../components/vertical-flow";
import styles from "./navigation.module.css";

const Navigation = props => {
  if (!props) {
    return null;
  }

  const { example } = props;
  return <div className={styles.root}>Navigation</div>;
};

Navigation.defaultProps = {};

Navigation.propTypes = {
  example: PropTypes.string
};

export default Navigation;
