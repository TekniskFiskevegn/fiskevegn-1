import React from "react";
import { Parallax, Background } from "react-parallax";

import { buildImageObj, cn } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import Intro from "../components/intro";
import utils from "./utils.module.css";
import styles from "./promoted.module.css";
import { responsiveTitle1 } from "./typography.module.css";

const Promoted = props => {
  const { introTitle, introText, image, title, text, browseMoreHref, lightTheme } = props;
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
          <a href="" className={utils.callToActionLink}>
            {browseMoreHref}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Promoted;
