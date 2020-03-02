import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { buildImageObj, cn } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import Intro from "./intro";

import styles from "./promoted.module.css";

const Promoted = props => {
  const {
    intro,
    title,
    text,
    image,
    browseMoreHref,
    browseMoreText,
    reverseFlow = false,
    lightBackground = false
  } = props;
  // ({
  //   title,
  //   text,
  //   secondaryTitle,
  //   secondaryText,
  //   image,
  //   browseMoreHref,
  //   browseMoreText,
  //   reverseFlow,
  //   lightBackground
  // })

  return (
    <div className={styles.root}>
      <Intro title={intro.title} text={intro.text} marginBottom />
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
            {title && <h3 className={styles.contentTitle}>{title}</h3>}
            {text && <p>{text}</p>}
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
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.object,
  browseMoreHref: PropTypes.string,
  browseMoreText: PropTypes.string,
  reverseFlow: PropTypes.bool
};

export default Promoted;
