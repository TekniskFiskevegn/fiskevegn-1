import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { buildImageObj, cn } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import Intro from "./intro";
import styles from "./promoted.module.css";
import utils from "./utils.module.css";
import typography from "./typography.module.css";

const Promoted = ({
  title,
  text,
  secondaryTitle,
  secondaryText,
  image,
  browseMoreHref,
  browseMoreText,
  reverseFlow
}) => {
  return (
    <div className={styles.root}>
      <Intro title={title} text={text} marginBottom />
      {/* {title && (
        <div className={cn(styles.intro, utils.marginBottom)}>
          {complementaryTitle && <span className={typography.tinyTitle}>{complementaryTitle}</span>}
          {title && <h2 className={typography.responsiveTitle1}>{title}</h2>}
          {text && <p className={typography.noMarginText}>{text}</p>}
        </div>
      )} */}
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
            {secondaryTitle && <h3 className={typography.responsiveTitle2}>{secondaryTitle}</h3>}
            {secondaryText && <p>{secondaryText}</p>}
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
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  browseMoreHref: PropTypes.string,
  browseMoreText: PropTypes.string,
  reverseFlow: PropTypes.bool
};

export default Promoted;
