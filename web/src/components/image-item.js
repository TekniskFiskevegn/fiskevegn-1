import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { buildImageObj, cn } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import styles from "./image-item.module.css";

// Use case:
// A list of partners

// Improvements:
// 1. Add support for internal linking via the Link component

const ImageItem = props => {
  if (props.imageHref) {
    return (
      <a href={`${props.imageHref}`} target="_blank" className={styles.root}>
        <img
          className={styles.image}
          src={imageUrlFor(buildImageObj(props))
            .width(500)
            .url()}
          alt={props.alt}
        />

        {props.caption && <span className={styles.caption}>{props.caption}</span>}
      </a>
    );
  } else {
    return (
      <div className={styles.root}>
        <img
          className={styles.image}
          src={imageUrlFor(buildImageObj(props))
            .width(500)
            .url()}
          alt={props.alt}
        />

        {props.caption && <span className={styles.caption}>{props.caption}</span>}
      </div>
    );
  }
};

ImageItem.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string,
  image: PropTypes.string
};

export default ImageItem;
