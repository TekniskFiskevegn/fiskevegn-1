import React from "react";
import { Link } from "gatsby";
import { cn, buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import SanityBlockText from "./sanity-block-text";

import styles from "./news-teaser.module.css";

const NewsTeaser = props => {
  console.log("props", props);
  return (
    <Link className={styles.root} to={`/news/${props.slug.current}`}>
      <div className={styles.leadMediaThumb}>
        {props.image && props.image.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.image))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit("crop")
              .url()}
            alt={props.image.alt}
          />
        )}
      </div>
      <div className={styles.textContent}>
        <h3 className={styles.title}>{props.title}</h3>
        {props._rawExcerpt && (
          <div className={styles.excerpt}>
            <SanityBlockText blocks={props._rawExcerpt} />
          </div>
        )}
      </div>
    </Link>
  );
};

export default NewsTeaser;
