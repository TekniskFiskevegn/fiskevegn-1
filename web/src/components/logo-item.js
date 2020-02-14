import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styles from "./navigation-item.module.css";

// Use case:
// A list of partners

// Improvements:
// 1. Add support for internal linking via the Link component

const LogoItem = props => {
  return (
    <a href={`/${props.url}`} target="_blank" className={styles.root}>
      {imgSrc && (
        <div className={styles.bodyImage}>
          <img src={imgSrc} alt={title} />
        </div>
      )}
      <div className={styles.bodyText}>
        {title && <h3>{title}</h3>}
        {description && <span>{description}</span>}
      </div>
    </a>
  );
};

LogoItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string,
  logo: PropTypes.string
};

export default LogoItem;
