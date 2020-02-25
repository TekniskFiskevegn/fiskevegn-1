import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import styles from "./navigation-item.module.css";

// Navigation Item is used for internal navigation on the site
// A navigation item is typically placed inside a list
// Navigation item has currently no support for images
// NB! For external links use something else

const NavigationItem = props => {
  // if !useTemplate change link
  // console.log("log props NavigationItem", props);
  // const template = props.isService ? "/service" : "/product";
  // const url = props.linksToStaticPage ? props.slug.current : `/${template}/${props.slug.current}`;
  const url = `/${props.templateUrl}/${props.slug.current}`;
  return (
    <Link className={styles.root} to={url}>
      <div className={styles.content}>
        {props.title && <h3 className={styles.title}>{props.title}</h3>}
        {props.teaser && <span className={styles.teaser}>{props.teaser}</span>}
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
