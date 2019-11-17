import React from "react";
import { Parallax, Background } from "react-parallax";

import { buildImageObj, cn } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

import styles from "./promoted-block.module.css";
import { responsiveTitle1 } from "../components/typography.module.css";

const PromotedBlockLarge = props => {
  console.log("props promoted-block-large.js", props);

  const { promotedBlock } = props;

  return (
    <div className={styles.root}>
      <div className={styles.intro}>
        <h2 className={responsiveTitle1}>Our Products</h2>
        <p>
          It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution
        </p>
      </div>
      <div className={styles.flexRow}>
        <div className={styles.imageContainer}>
          {/* <img
            src={imageUrlFor(buildImageObj(promotedBlock.image))
              .width(700)
              .height(Math.floor((9 / 16) * 700))
              .fit("crop")
              .url()}
            alt={promotedBlock.image.alt}
          /> */}
        </div>
        <div className={styles.textContainer}>
          <h3>Consectetur</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores porro iste sint
            suscipit excepturi aliquid a laudantium nihil rerum nisi. Saepe pariatur at atque esse
            accusamus repellendus exercitationem iusto odio!
          </p>
          <a href="">Iste sint</a>
        </div>
      </div>
    </div>
  );
};

export default PromotedBlockLarge;
