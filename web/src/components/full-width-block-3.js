import React from "react";

import { buildImageObj, cn } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

import List from "../components/list";
import Card from "../components/card";

import utils from "./utils.module.css";
import styles from "./full-width-block-3.module.css";
import { responsiveTitle1 } from "./typography.module.css";

const FullWidthBlock = props => {
  console.log("props full-width-block.js", props);

  const { fullWidthBlock } = props;

  return (
    <div className={styles.root}>
      <div className={styles.secondRow}>
        <div className={styles.backgroundSvg}>
          <div className={utils.positionAbsolute}>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#F3F4F5"
                fillOpacity="1"
                d="M0,288L60,288C120,288,240,288,360,250.7C480,213,600,139,720,117.3C840,96,960,128,1080,122.7C1200,117,1320,75,1380,53.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
              ></path>
            </svg> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#F3F4F5"
                fill-opacity="1"
                d="M0,128L48,112C96,96,192,64,288,69.3C384,75,480,117,576,133.3C672,149,768,139,864,160C960,181,1056,235,1152,224C1248,213,1344,139,1392,101.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#F3F4F5"
                fill-opacity="1"
                d="M0,96L48,96C96,96,192,96,288,106.7C384,117,480,139,576,160C672,181,768,203,864,186.7C960,171,1056,117,1152,106.7C1248,96,1344,128,1392,144L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#F3F4F5"
                fillOpacity="1"
                d="M0,160L80,149.3C160,139,320,117,480,101.3C640,85,800,75,960,74.7C1120,75,1280,85,1360,90.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className={styles.backgroundFiller}></div>
          <div className={styles.wrapper}>
            <div className={styles.flexController}>
              <List type="category">
                <Card
                  title="Fishery"
                  description="sustainable solutions
                towards safer, cleaner oceans."
                  isLink={true}
                  linkSrc="fishery"
                  hasImage={true}
                  imgSrc="/fishery.jpg"
                />

                <Card
                  title="Aquaculture"
                  description="sustainable solutions
                towards safer, cleaner oceans."
                  isLink={true}
                  linkSrc="aquaculture"
                  hasImage={true}
                  imgSrc="/rope-2.jpg"
                />

                <Card
                  title="Rope solutions"
                  description="sustainable solutions
                towards safer, cleaner oceans."
                  isLink={true}
                  linkSrc=""
                  hasImage={true}
                  imgSrc="/rope-2.jpg"
                />

                <Card
                  title="General supplies"
                  description="sustainable solutions
                towards safer, cleaner oceans."
                  isLink={true}
                  linkSrc=""
                  hasImage={true}
                  imgSrc="/fishery.jpg"
                />
              </List>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.firstRow}>
        <div className={styles.backgroundColor}>hei</div>
      </div> */}
    </div>
  );
};

export default FullWidthBlock;
