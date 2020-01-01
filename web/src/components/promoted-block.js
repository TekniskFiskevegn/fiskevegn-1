import React from "react";
import { Parallax, Background } from "react-parallax";

import { buildImageObj, cn } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlockIntro from "../components/block-intro";
import utils from "./utils.module.css";
import styles from "./promoted-block.module.css";
import { responsiveTitle1 } from "../components/typography.module.css";

const PromotedBlock = props => {
  console.log("promoted-block.js", props);

  const { promotedBlock, lightTheme, darkerTheme, darkTheme } = props;

  return (
    <div className={styles.root}>
      <div className={styles.intro}>
        <BlockIntro
          tinyTitle=""
          title="Modern fishing solutions"
          text="It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.imageContent}>
          {promotedBlock.image && (
            <img
              src={imageUrlFor(buildImageObj(promotedBlock.image))
                .width(700)
                .height(Math.floor((9 / 16) * 700))
                .fit("crop")
                .url()}
              alt={promotedBlock.image.alt}
            />
          )}
        </div>
        <div
          className={cn(
            styles.textContent,
            lightTheme ? styles.lightTheme : "",
            darkerTheme ? styles.darkerTheme : "",
            darkTheme ? styles.darkTheme : ""
          )}
        >
          <h3 className={styles.title}>Our products</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores porro iste sint
            suscipit excepturi aliquid a laudantium nihil rerum nisi. Saepe pariatur at atque esse
            accusamus repellendus exercitationem iusto odio!
          </p>
          <a href="" className={utils.callToActionLink}>
            SEE OUR PRODUCT LINE
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromotedBlock;
