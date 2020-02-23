import React from "react";
import PropTypes from "prop-types";
import { cn } from "../lib/helpers";
import NavigationItem from "./navigation-item";

import styles from "./navigation.module.css";

// Use case:
// As navigation component on a page or category into deeper structure

const Navigation = ({ nodes, nodeLinksToTemplate }) => {
  return (
    <div className={styles.root}>
      <ul className={cn(styles.default, styles.custom, styles.boxShadow)}>
        {nodes &&
          nodes.map(node => (
            <li key={node.id}>
              <NavigationItem {...node} templateUrl={nodeLinksToTemplate} />
            </li>
          ))}
      </ul>
    </div>
  );
};

Navigation.propTypes = {
  nodes: PropTypes.array.isRequired
};

export default Navigation;
