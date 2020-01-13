import React from "react";
import { Link } from "gatsby";
import { Parallax, Background } from "react-parallax";

import { buildImageObj, cn } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import Intro from "../components/intro";
import utils from "./utils.module.css";
import styles from "./promoted.module.css";
import { responsiveTitle1 } from "./typography.module.css";

const Promoted = props => {
  const {
    introTitle,
    introText,
    image,
    title,
    text,
    browseMoreHref,
    browseMoreText,
    lightTheme
  } = props;
  console.log("log props promoted", props);
  return (
    <div className={styles.root}>
      <Intro title={title} text={introText} margin />
      <div className={styles.wrapper}>
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
          {!image && <img src="/boat.jpg" alt="" />}
        </div>
        <div className={cn(styles.text, lightTheme ? styles.lightTheme : "")}>
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

export default Promoted;
