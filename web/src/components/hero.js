import React from "react";
import { buildImageObj, cn } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import styles from "./hero.module.css";

const Hero = props => {
  console.log("hero", props);
  const { frontpageImage, demo, demoSrc } = props;
  if (demo) {
    return (
      <div className={styles.root}>
        <img src={demoSrc} />
      </div>
    );
  }
  if (!frontpageImage) {
    return null;
  }
  return (
    <div className={styles.root}>
      <img
        src={imageUrlFor(buildImageObj(frontpageImage))
          .width(1800)
          .height(Math.floor((9 / 16) * 1800))
          .fit("crop")
          .url()}
        alt={frontpageImage.alt}
      />
    </div>
  );
};

export default Hero;
