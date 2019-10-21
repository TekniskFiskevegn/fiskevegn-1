import React from "react";
import { Parallax, Background } from "react-parallax";

import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

import styles from "./frontpage-image.module.css";

const FrontpageImage = props => {
  console.log("log frontpage-image.js - props", props);
  const { frontpageImage } = props;
  const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };
  return (
    <div className={styles.root}>
      {/* <div className={styles.frontpageImage}>
        {frontpageImage.caption && <h2 className={styles.caption}>{frontpageImage.caption}</h2>}
        <Parallax strength={500}>
          <Background className="custom-bg">
            <img
              src={imageUrlFor(buildImageObj(frontpageImage))
                .width(1200)
                .height(Math.floor((9 / 16) * 1200))
                .fit("crop")
                .url()}
              alt={frontpageImage.alt}
            />
          </Background>
        </Parallax>
      </div> */}

      <div className={styles.frontpageImage}>
        {frontpageImage.caption && <h2 className={styles.caption}>{frontpageImage.caption}</h2>}
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
