import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { buildImageObj, cn } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import styles from "./logo-item.module.css";

// Use case:
// A list of partners

// Improvements:
// 1. Add support for internal linking via the Link component

const LogoItem = props => {
  return (
    <a href={`/${props.href}`} target="_blank" className={styles.root}>
      {props.logo && (
        <img
          className={styles.logo}
          src={imageUrlFor(buildImageObj(props.logo))
            .width(500)
            .url()}
          alt={props.logo.alt}
        />
      )}
      {props.name && <span className={styles.name}>{props.name}</span>}
    </a>
  );
};

LogoItem.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string,
  logo: PropTypes.string
};

export default LogoItem;
