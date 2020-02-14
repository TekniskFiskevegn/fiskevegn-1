import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { cn } from "../lib/helpers";
import styles from "./navigation-item.module.css";

// Navigation Item is used for internal navigation on the site
// A navigation item is typically placed inside a list
// Navigation item has currently no support for images
// NB! For external links use something else

const NavigationItem = props => {
  // if !useTemplate change link
  const url = props.linksToStaticPage ? props.slug.current : `/product/${props.slug.current}`;
  return (
    <Link className={styles.root} to={url}>
      <div className={styles.content}>
        {props.name && <h3 className={styles.name}>{props.name}</h3>}
        {props.teaser && <span>{props.teaser}</span>}
      </div>
    </Link>
  );
};

NavigationItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  slug: PropTypes.string
};

export default NavigationItem;
