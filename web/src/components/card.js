import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";

import styles from "./card.module.css";
import utils from "../components/utils.module.css";

const Card = ({ title, description, isLink = false, hasImage = false, imgSrc = null }) => {
  return (
    <div className={styles.root}>
      {isLink && (
        <a href="#" className={cn(styles.link, hasImage ? "hasImage" : "")}>
          {hasImage && (
            <div className={cn(utils.flex, utils.flexAlignItemsCenter)}>
              <div className={utils.flex1}>
                <img src={imgSrc} alt="" />
              </div>
              <div className={utils.flex3}>
                <div className={styles.textSpace}>
                  <h3 className={styles.title}>{title}</h3>
                  <span>{description}</span>
                </div>
              </div>
            </div>
          )}
          {!hasImage && (
            <div>
              <h3 className={styles.title}>{title}</h3>
              <span>{description}</span>
            </div>
          )}
        </a>
      )}
      {!isLink && (
        <div className={styles.regular}>
          <h3 className={styles.title}>{title}</h3>
          <span>{description}</span>
        </div>
      )}
    </div>
  );
};

export default Card;
