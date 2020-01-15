import React from "react";
import { Link } from "gatsby";
import { buildImageObj, cn } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import Intro from "../components/intro";
import utils from "./utils.module.css";
import styles from "./promoted.module.css";

const Promoted = ({ intro = {}, content = {}, styling = {} }) => {
  const { title, text, image, demoImage, browseMoreHref, browseMoreText } = content;
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
          <Link to={browseMoreHref} className={utils.callToActionLink}>
            {browseMoreText}
          </Link>
        </div>
      </div>
    </div>
  );
};

Promoted.DefaultProps = {
  intro: {}
};

export default Promoted;
