import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { buildImageObj, cn } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import Intro from "./intro";

import styles from "./contact.module.css";

const Contact = ({
  complementaryTitle,
  title,
  text,
  adress,
  phone,
  email,
  map,
  image,
  reverseFlow
}) => {
  return (
    <div className={styles.root}>
      <Intro title={title} complementaryTitle={complementaryTitle} text={text} marginBottom />
      <div className={cn(styles.wrapper, reverseFlow ? styles.reverseFlow : "")}>
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
            <h3 className={styles.contentTitle}>Contact</h3>
            {adress && <p>{adress}</p>}
            <ul className={styles.list}>
              {phone && (
                <li>
                  <a className={styles.link} href="#">
                    {phone}
                  </a>
                </li>
              )}
              {email && (
                <li>
                  <a className={styles.link} href="#">
                    {email}
                  </a>
                </li>
              )}
              {map && (
                <li>
                  <a className={styles.link} href="#">
                    Map
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  browseMoreHref: PropTypes.string,
  browseMoreText: PropTypes.string,
  reverseFlow: PropTypes.bool
};

export default Contact;
