import React from "react";
import PropTypes from "prop-types";
import { cn } from "../lib/helpers";

import styles from "./example-component.module.css";

const ExampleComponent = props => {
  if (!props) {
    return null;
  }

  const { example } = props;
  return <div className={styles.root}>Example</div>;
};

ExampleComponent.defaultProps = {};

ExampleComponent.propTypes = {
  example: PropTypes.string
};

export default ExampleComponent;
