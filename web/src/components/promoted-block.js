import React from "react";
import { Parallax, Background } from "react-parallax";

import { buildImageObj, cn } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

import styles from "./promoted-block.module.css";
import { responsiveTitle1 } from "../components/typography.module.css";

const PromotedBlock = props => {
  console.log("log promoted-block.js - props", props);

  // const { frontpageImage } = props;

  return (
    <div className={styles.root}>
      <div className={styles.intro}>
        <h2 className={responsiveTitle1}>Superawesome title here</h2>
        <p>
          It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution
        </p>
      </div>
    </div>
  );
};

export default PromotedBlock;
