import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { cn } from "../lib/helpers";

import styles from "./navigation.module.css";
import stylesItem from "./navigation-item.module.css";

const Navigation = ({ nodes, template, locale }) => {
  return (
    <div className={styles.root}>
      <ul className={cn(styles.default, styles.custom, styles.boxShadow)}>
        {nodes &&
          nodes.map(node => (
            <li key={node.id}>
              <Link className={stylesItem.root} to={`/${template[locale]}/${node.slug.current}`}>
                <div className={stylesItem.content}>
                  {node.title && <h3 className={stylesItem.title}>{node.title}</h3>}
                  {node.teaser && <span className={stylesItem.teaser}>{node.teaser}</span>}
                </div>
              </Link>
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
