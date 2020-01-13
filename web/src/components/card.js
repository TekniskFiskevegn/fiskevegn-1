import { Link } from "gatsby";
import React from "react";
import { cn } from "../lib/helpers";
import styles from "./card.module.css";

// @ sytalaust: add palette option

const Card = ({ title, text, linkSrc, imgSrc, externalLink, styling }) => {
  const { flat, opacity, subtle, palette } = styling || {};
  if (!linkSrc) {
    return null;
  }

  const body = (
    <div>
      <h3 className={cn(styles.title, subtle ? styles.subtle : "")}>{title}</h3>
      <span>{text}</span>
    </div>
  );

  // if img is needed
  const img = (
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
  );

  return (
    <div className={cn(styles.root, flat ? styles.flat : "", opacity ? styles.opacity : "")}>
      {externalLink && (
        <a className={cn(styles.link)} href={linkSrc} target="_blank">
          {body}
        </a>
      )}
      {!externalLink && (
        <Link className={cn(styles.link)} to={`${linkSrc}`}>
          {body}
        </Link>
      )}
    </div>
  );
};

Card.DefaultProps = {
  title: "",
  text: "",
  linkSrc: "",
  imgSrc: "",
  styling: {},
  externalLink: false
};

export default Card;
