import React from "react";
import PropTypes from "prop-types";
import { cn } from "../lib/helpers";
import styles from "./vertical-flow.module.css";

const VerticalFlow = ({ children, customValues, isMargin }) => {
  if (!customValues) {
    return <div className={cn(styles.root, "default")}>{children}</div>;
  }
  const { top, bottom } = customValues;
  // Undefined properties are not copied in the object, so no need for checking
  const style = isMargin
    ? {
        marginTop: top + "em",
        marginBottom: bottom + "em"
      }
    : {
        paddingTop: top + "em",
        paddingBottom: bottom + "em"
      };
  return (
    <div className={cn(styles.root, "inline")} style={style}>
      {children}
    </div>
  );
};

VerticalFlow.defaultProps = {
  isMargin: false
};

VerticalFlow.propTypes = {
  customValues: PropTypes.shape({
    top: PropTypes.number,
    bottom: PropTypes.number
  }),
  isMargin: PropTypes.bool
};

export default VerticalFlow;
