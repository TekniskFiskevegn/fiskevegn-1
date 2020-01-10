import { Link } from "gatsby";
import React from "react";
import { cn } from "../lib/helpers";
import Svg from "./svg";
import styles from "./card.module.css";

const Card = ({ title, text, linkSrc, icon, imgSrc, imgInsideBlob, styling }) => {
  const { flat, opacity, palette } = styling || {};

  if (!linkSrc) {
    return (
      <div
        className={cn(
          styles.root,
          styles.default,
          flat ? styles.flat : "",
          opacity ? styles.opacity : ""
        )}
      >
        <h3 className={styles.title}>{title}</h3>
        <span>{text}</span>
      </div>
    );
  }

  return (
    <div className={cn(styles.root, flat ? styles.flat : "", opacity ? styles.opacity : "")}>
      <Link className={cn(styles.link)} to={`/${linkSrc}`}>
        {imgSrc && (
          <div className={cn(styles.wrapper)}>
            <div className={styles.image}>
              <img src={imgSrc} alt="" />
            </div>
            <div className={styles.text}>
              <div className={styles.textSpace}>
                <h3 className={styles.title}>{title}</h3>
                <span>{text}</span>
              </div>
            </div>
          </div>
        )}
        {icon && (
          <div>
            <div>
              <Svg icon name="arrow-thin" />
            </div>
            <div>
              <h3 className={styles.title}>{title}</h3>
              <span>{text}</span>
            </div>
          </div>
        )}
        {!imgSrc && !icon && (
          <div>
            <h3 className={styles.title}>{title}</h3>
            <span>{text}</span>
          </div>
        )}
      </Link>
    </div>
  );
};

Card.DefaultProps = {};

export default Card;
