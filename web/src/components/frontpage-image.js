import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

import styles from "./frontpage-image.module.css";

const FrontpageImage = props => {
  console.log("log frontpage-image.js - props", props);
  const { frontpageImage } = props;

  return (
    <div className={styles.root}>
      <div className={styles.frontpageImage}>
        <img
          src={imageUrlFor(buildImageObj(frontpageImage))
            .width(1200)
            .height(Math.floor((9 / 16) * 1200))
            .fit("crop")
            .url()}
          alt={frontpageImage.alt}
        />
      </div>
    </div>
  );
};

export default FrontpageImage;
