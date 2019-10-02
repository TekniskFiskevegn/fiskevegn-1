import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

import styles from "./frontpage-image.module.css";

const FrontpageImage = props => {
  console.log("log props", props);
  // const { image } = props;

  return (
    <div className={styles.root}>
      <div className={styles.frontpageImage}>
        {/* <img
          src={imageUrlFor(buildImageObj(image))
            .width(1200)
            .height(Math.floor((9 / 16) * 1200))
            .fit("crop")
            .url()}
          alt={image.alt}
        /> */}
      </div>
    </div>
  );
};

export default FrontpageImage;
