import React from "react";
import { Parallax, Background } from "react-parallax";

import { buildImageObj, cn } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

import utils from "./utils.module.css";
import styles from "./full-width-block.module.css";
import { responsiveTitle1 } from "./typography.module.css";

const FullWidthBlock = props => {
  console.log("props full-width-block.js", props);

  const { fullWidthBlock } = props;

  return (
    <div className={styles.root}>
      <div className={styles.firstRow}>
        <div className={styles.backgroundColor}>
          <div className={styles.wrapper}>
            <h2 className={responsiveTitle1}>Development of a successful fishery</h2>
            <p className={utils.noMargin}>
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution
            </p>
          </div>
        </div>
      </div>
      <div className={styles.secondRow}>
        <div className={styles.backgroundSvg}>
          <div className={utils.positionAbsolute}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#F3F4F5"
                fillOpacity="1"
                d="M0,288L60,288C120,288,240,288,360,250.7C480,213,600,139,720,117.3C840,96,960,128,1080,122.7C1200,117,1320,75,1380,53.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
              ></path>
            </svg>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.flexController}>
              <div className={styles.imageContainer}>
                <img
                  src={imageUrlFor(buildImageObj(fullWidthBlock.image))
                    .width(700)
                    .height(Math.floor((9 / 16) * 700))
                    .fit("crop")
                    .url()}
                  alt={fullWidthBlock.image.alt}
                />
              </div>
              <div className={styles.textContainer}>
                <h3 className={styles.textContainerTitle}>Our services</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores porro iste
                  sint suscipit excepturi aliquid a laudantium nihil rerum nisi. Saepe pariatur at
                  atque esse accusamus repellendus exercitationem iusto odio!
                </p>
                <a href="" className={utils.callToActionLink}>
                  SEE OUR SERVICES
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullWidthBlock;
