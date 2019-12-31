import React from "react";

import { buildImageObj, cn } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

import List from "../components/list";
import Card from "../components/card";

import utils from "./utils.module.css";
import styles from "./full-width-block-2.module.css";
import { responsiveTitle1 } from "./typography.module.css";

const FullWidthBlock = props => {
  console.log("props full-width-block.js", props);

  const { fullWidthBlock } = props;

  return (
    <div className={styles.root}>
      <div className={styles.firstRow}>
        <div className={styles.backgroundColor}>
          <div className={styles.wrapper}>
            <h2 className={responsiveTitle1}>Partners and Collaborations</h2>
            <p className={utils.noMargin}>
              Fiskevegn is working together with mulitple industry operators, goverments and NGO's
              to eliminate IUU fishing and to drive for economically viable, sustainable solutions
              towards safer, cleaner oceans. We are also a member of several industry associations
              to keep current with new developments in manufacturing technology.
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
                fill-opacity="1"
                d="M0,192L48,208C96,224,192,256,288,250.7C384,245,480,203,576,181.3C672,160,768,160,864,144C960,128,1056,96,1152,112C1248,128,1344,192,1392,224L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.flexController}>
              <List>
                <Card
                  title="Colto"
                  description="sustainable solutions towards safer, cleaner oceans."
                />
                <Card
                  title="Eurocord"
                  description="sustainable solutions
              towards safer, cleaner oceans."
                />
                <Card
                  title="Global Ghost Gear Initiative"
                  description="sustainable solutions
              towards safer, cleaner oceans."
                />
              </List>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullWidthBlock;
