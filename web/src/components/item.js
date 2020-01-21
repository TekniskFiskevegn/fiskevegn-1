import { Link } from "gatsby";
import React from "react";
import { cn } from "../lib/helpers";
import styles from "./item.module.css";

// Item has a selection of predefined styles

const Item = ({ title, text, imgSrc, url, externalUrl, style }) => {
  // const { attention, subtleAttention, inYourFace, opacity } = style;

  const customStyle = getCustomStyle(style);

  const body = (
    <>
      {imgSrc && (
        <div className={styles.bodyImage}>
          <img src={imgSrc} alt={title} />
        </div>
      )}
      <div className={styles.bodyText}>
        {title && <h3>{title}</h3>}
        {text && <span>{text}</span>}
      </div>
    </>
  );

  if (!url) {
    return <div className={cn(styles.root, customStyle)}>{body}</div>;
  }

  return (
    <div className={cn(styles.root, styles.linkItem, customStyle)}>
      {externalUrl && (
        <a href={url} target="_blank">
          {body}
        </a>
      )}
      {!externalUrl && <Link to={`${url}`}>{body}</Link>}
    </div>
  );
};

const getCustomStyle = style => {
  console.log("item getcustomstyle", style || "none");
  const customStyle = cn(
    style == "pop" ? styles.popItem : "foo",
    style == "feature" ? styles.featureItem : "bar"
  );

  // attention ? styles.attention : "",
  // subtleAttention ? styles.subtleAttention : "",
  // inYourFace ? styles.inYourFace : "",
  // opacity ? styles.opacity : ""
  return customStyle;
};

export default Item;
