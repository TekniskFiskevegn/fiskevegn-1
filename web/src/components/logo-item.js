import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { buildImageObj, cn } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

import styles from "./logo-item.module.css";

const LogoItem = props => {
  if (props.imageHref) {
    return (
      <a href={`${props.imageHref}`} target="_blank" className={styles.root}>
        <img
          className={cn(styles.image)}
          src={imageUrlFor(buildImageObj(props))
            .width(500)
            .url()}
          alt={props.alt}
        />
        {/* {props.caption && <span className={styles.caption}>{props.caption}</span>} */}
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
        {/* {props.caption && <span className={styles.caption}>{props.caption}</span>} */}
      </div>
    );
  }
};

LogoItem.propTypes = {};

export default LogoItem;
