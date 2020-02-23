import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { buildImageObj, cn } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import Intro from "./intro";

import styles from "./promoted.module.css";

const Promoted = ({
  title,
  text,
  secondaryTitle,
  secondaryText,
  image,
  browseMoreHref,
  browseMoreText,
  reverseFlow,
  lightBackground
}) => {
  return (
    <div className={styles.root}>
      <Intro title={title} text={text} marginBottom />
      <div
        className={cn(
          styles.wrapper,
          reverseFlow ? styles.reverseFlow : "",
          lightBackground ? styles.lightBackground : ""
        )}
      >
        <div className={styles.visuals}>
          {image && (
            <img
              src={imageUrlFor(buildImageObj(image))
                .width(800)
                .height(Math.floor((9 / 16) * 1000))
                .fit("crop")
                .url()}
              alt={image.alt}
            />
          )}
        </div>
        <div className={cn(styles.content)}>
          <div>
            {secondaryTitle && <h3 className={styles.contentTitle}>{secondaryTitle}</h3>}
            {secondaryText && <p>{secondaryText}</p>}
            {browseMoreHref && (
              <Link to={browseMoreHref} className={styles.href}>
                {browseMoreText || "Read more"}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Promoted.DefaultProps = {};

Promoted.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  browseMoreHref: PropTypes.string,
  browseMoreText: PropTypes.string,
  reverseFlow: PropTypes.bool
};

export default Promoted;
