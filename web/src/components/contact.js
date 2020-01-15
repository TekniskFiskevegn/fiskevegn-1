import React from "react";
import { Link } from "gatsby";
import { buildImageObj, cn } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import Intro from "../components/intro";
import List from "../components/list";
import styles from "./contact.module.css";
import utils from "./utils.module.css";

const Contact = ({ intro = {}, content = {}, styling = {} }) => {
  const { title, text, image, demoImage, phone, email, map } = content;
  const { theme, reverse } = styling;

  return (
    <div className={styles.root}>
      <Intro {...intro} margin />
      <div className={cn(styles.wrapper, reverse ? styles.reverse : "")}>
        <div className={styles.image}>
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
          {demoImage && <img src={demoImage} alt="" />}
        </div>
        <div className={cn(styles.text, theme == "white" ? styles.themeWhite : "")}>
          <h3 className={styles.title}>{title}</h3>
          <p>{text}</p>
          <List type="vertical" thight>
            {phone && (
              <a href="" className={utils.callToActionLink}>
                {phone}
              </a>
            )}
            {email && (
              <a href="" className={utils.callToActionLink}>
                {email}
              </a>
            )}
            {map && (
              <a href={map} className={utils.callToActionLink}>
                Map
              </a>
            )}
          </List>
        </div>
      </div>
    </div>
  );
};

Contact.DefaultProps = {};

export default Contact;
