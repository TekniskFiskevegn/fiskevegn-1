import React from "react";
import PropTypes from "prop-types";
import { buildImageObj, cn } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import styles from "./presentation.module.css";
import { defaultLink } from "./utils.module.css";
import { responsiveTitle1 } from "./typography.module.css";
import listStyles from "../components/list.module.css";
import LogoItem from "../components/logo-item";

// Todo:
// 1. Add support for regular list of text/links in visuals
// 2. More generic then "partnerList"

const Presentation = props => {
  const { title, text, image, email, reverseFlow, partnerList } = props;

  if (partnerList) {
    return (
      <div className={cn(styles.root, reverseFlow ? styles.reverseFlow : "")}>
        <div className={styles.text}>
          <div>
            <h2 className={styles.title}>{title}</h2>
            <p>{text}</p>
          </div>
        </div>
        <div className={styles.visuals}>
          {partnerList.length > 0 && (
            <ul
              className={cn(
                styles.listOfVisuals,
                styles.listOfVisualsOddEven,
                styles.listOfVisualsBorders
              )}
            >
              {partnerList.map((partner, i) => (
                <li key={i}>
                  <LogoItem {...partner} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={cn(styles.root, reverseFlow ? styles.reverseFlow : "")}>
      <div className={styles.text}>
        <div>
          <h2 className={styles.title}>{title}</h2>
          <p>{text}</p>
          {email && <a className={defaultLink}>{email}</a>}
        </div>
      </div>
      <div className={styles.visuals}>
        <img
          src={imageUrlFor(buildImageObj(image))
            .width(700)
            .height(Math.floor((9 / 16) * 700))
            .fit("crop")
            .url()}
          alt={image.alt}
        />
      </div>
    </div>
  );
};

Presentation.defaultProps = {};

export default Presentation;
