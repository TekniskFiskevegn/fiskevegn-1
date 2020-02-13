import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { buildImageObj, cn } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import Meta from "../components/meta";
import styles from "./promoted.module.css";
import utils from "./utils.module.css";
import {
  responsiveTitle1,
  responsiveTitle2,
  responsiveTitle3,
  tinyTitle,
  noMarginText
} from "./typography.module.css";

const Promoted = ({ intro, title, text, image, browseMoreHref, browseMoreText, reverseFlow }) => {
  return (
    <div className={styles.root}>
      {intro && (
        <div className={cn(styles.intro, utils.marginBottom)}>
          {intro.name && <span className={tinyTitle}>{intro.name}</span>}
          {intro.title && <h2 className={responsiveTitle1}>{intro.title}</h2>}
          {intro.text && <p className={noMarginText}>{intro.text}</p>}
        </div>
      )}
      <div className={cn(styles.wrapper, reverseFlow ? styles.reverseFlow : "")}>
        <div className={styles.visuals}>
          {image && (
            <img
              src={imageUrlFor(buildImageObj(image))
                .width(700)
                .height(Math.floor((9 / 16) * 700))
                .fit("crop")
                .url()}
              alt={image.alt}
            />
          )}
        </div>
        <div className={cn(styles.content, utils.boxShadowMoreSubtle)}>
          <div>
            {title && <h3 className={responsiveTitle2}>{title}</h3>}
            {text && <p>{text}</p>}
            {browseMoreHref && (
              <Link to={browseMoreHref} className={utils.callToActionLink}>
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
  intro: PropTypes.object,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired
};

export default Promoted;
