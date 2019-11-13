import React from "react";
import { Parallax, Background } from "react-parallax";

import { buildImageObj, cn } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

import styles from "./frontpage-image.module.css";
import { title2 } from "../components/typography.module.css";

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
        {frontpageImage.caption && (
          <div className={styles.caption}>
            <h2 className={cn(title2, styles.captionTitle)}>{frontpageImage.caption}</h2>
            <svg className={styles.captionSvg} viewBox="230 75 950 615">
              <path d="M 262.9,252.2 C 210.1,338.2 259.71773331427744,419.9895457714405 296.32952245714154,527.5854833714332 334.5523877142923,636.668736514284 511.2,532.8590449142831 620.3,551.3590449142831 750.6,573.459044914283 869.5372491999984,710.8906649142879 987.3,686.5 1099.0911125714267,663.7427872571417 1206.8119714285647,544.8687365142839 1173,429.2 1139.1880285714353,311.293657771429 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z"></path>
            </svg>
          </div>
        )}
        <img
          src={imageUrlFor(buildImageObj(frontpageImage))
            .width(1800)
            .height(Math.floor((9 / 16) * 1800))
            .fit("crop")
            .url()}
          alt={frontpageImage.alt}
        />
      </div>
    </div>
  );
};

export default FrontpageImage;
