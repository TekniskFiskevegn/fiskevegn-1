import React from "react";
import { Parallax, Background } from "react-parallax";

import { buildImageObj, cn } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

import styles from "./frontpage-image.module.css";
import { title1 } from "../components/typography.module.css";
import frontpage from "../../../studio/schemas/documents/frontpage";

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

      {frontpageImage && (
        <div className={styles.frontpageImage}>
          {frontpageImage.caption && (
            <div className={styles.caption}>
              <h2 className={styles.captionTitle}>
                <span>{frontpageImage.caption}</span>
              </h2>
              <svg
                className={styles.captionSvg}
                viewBox="0 0 600 600"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="translate(200,200)">
                  <path
                    d="M165.7,-124.8C205.9,-81.9,223.3,-13.4,208.7,46.4C194.1,106.3,147.4,157.7,96.1,171.6C44.8,185.6,-11,162.2,-62.9,135.3C-114.7,108.5,-162.7,78.3,-177.2,34.7C-191.7,-8.9,-172.9,-65.9,-137.8,-107.7C-102.7,-149.6,-51.3,-176.3,5.7,-180.8C62.8,-185.4,125.6,-167.8,165.7,-124.8Z"
                    fill="#d35400"
                  />
                </g>
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
      )}
      {!frontpageImage && <h2>Frontpageimage missing</h2>}
    </div>
  );
};

export default FrontpageImage;
