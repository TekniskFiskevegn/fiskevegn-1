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
    <div className={utils.verticalFlow}>
      <div className={styles.root}>
        <div className={styles.firstRow}>
          <div className={styles.wrapper}>
            <h2 className={responsiveTitle1}>Our Products</h2>
            <p>
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution
            </p>
          </div>
        </div>
        <div className={styles.secondRow}>
          <div className={styles.wrapper}>
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
              <h3>Consectetur</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores porro iste sint
                suscipit excepturi aliquid a laudantium nihil rerum nisi. Saepe pariatur at atque
                esse accusamus repellendus exercitationem iusto odio!
              </p>
              <a href="">Iste sint</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullWidthBlock;
