import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { buildImageObj, cn } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import styles from "./Contact.module.css";
import utils from "./utils.module.css";
import typography from "./typography.module.css";
import list from "./list.module.css";

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
      {title && (
        <div className={cn(styles.intro, utils.marginBottom)}>
          {complementaryTitle && <span className={typography.tinyTitle}>{complementaryTitle}</span>}
          {title && <h2 className={typography.responsiveTitle1}>{title}</h2>}
          {text && <p className={typography.noMarginText}>{text}</p>}
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
            <h3 className={typography.responsiveTitle2}>Contact</h3>
            {adress && <p>{adress}</p>}
            <ul className={cn(list.ul, list.plain)}>
              {phone && (
                <li>
                  <a className={utils.defaultLink} href="#">
                    {phone}
                  </a>
                </li>
              )}
              {email && (
                <li>
                  <a className={utils.defaultLink} href="#">
                    {email}
                  </a>
                </li>
              )}
              {map && (
                <li>
                  <a className={utils.defaultLink} href="#">
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

Contact.DefaultProps = {};

Contact.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  browseMoreHref: PropTypes.string,
  browseMoreText: PropTypes.string,
  reverseFlow: PropTypes.bool
};

export default Contact;
