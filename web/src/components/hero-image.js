import React from "react";
import { Parallax, Background } from "react-parallax";

import { buildImageObj, cn } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

import styles from "./hero-image.module.css";
import { title1 } from "../components/typography.module.css";
import frontpage from "../../../studio/schemas/documents/frontpage";

const HeroImage = props => {
  console.log("log hero-image.js - props", props);
  // const { frontpageImage } = props;
  const { src } = props;

  console.log("log src", src);
  return (
    <div className={styles.root}>
      {src && (
        <div className={styles.heroImage}>
          {/* <img
            src={imageUrlFor(buildImageObj(frontpageImage))
              .width(1800)
              .height(Math.floor((9 / 16) * 1800))
              .fit("crop")
              .url()}
            alt={frontpageImage.alt}
          /> */}
          <img src={src} alt="hei" />
        </div>
      )}
      {!src && <h2>src missing</h2>}
    </div>
  );
};

export default HeroImage;
