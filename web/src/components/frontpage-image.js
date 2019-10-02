import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

import styles from "./frontpage-image.module.css";

const FrontpageImage = props => {
  const { image } = props;

  return (
    <div className={styles.root}>
      <div className={styles.mainImage}>
        {/* <img
          src={imageUrlFor(buildImageObj(mainImage))
            .width(1200)
            .height(Math.floor((9 / 16) * 1200))
            .fit("crop")
            .url()}
          alt={mainImage.alt}
        /> */}
      </div>
    </div>
  );
};

export default FrontpageImage;
