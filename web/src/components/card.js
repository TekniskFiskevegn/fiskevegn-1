import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";

import styles from "./card.module.css";
import utils from "../components/utils.module.css";

const Card = ({
  title,
  description,
  isLink,
  hasImage,
  imgSrc,
  linkSrc,
  plain
}) => {
  return (
    <div className={cn(styles.root, plain ? styles.plain : "")}>
      {isLink && (
        <Link className={cn(styles.link)} to={`/${linkSrc}`}>
          {hasImage && (
            <div className={cn(utils.flex, utils.flexAlignItemsCenter)}>
              <div className={utils.flexItemSmall}>
                <img src={imgSrc} alt="" />
              </div>
              <div className={utils.flexItemLarge}>
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
        </Link>
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

Card.DefaultProps = {
  isLink: false,
  hasImage: false,
  plain: false,
  imgSrc: "",
  linkSrc: ""
}

export default Card;
