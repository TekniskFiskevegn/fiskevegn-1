import { Link } from "gatsby";
import React from "react";
import { cn, buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import SanityBlockText from "./sanity-block-text";

import styles from "./news-teaser.module.css";
import { responsiveTitle3 } from "./typography.module.css";

const NewsTeaser = props => {
  console.log("props", props);
  return (
    <Link className={styles.root} to={`/news/${props.slug.current}`}>
      <div className={styles.leadMediaThumb}>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </div>
      <h3 className={responsiveTitle3}>{props.title}</h3>
      {props._rawExcerpt && (
        <div className={styles.excerpt}>
          <SanityBlockText blocks={props._rawExcerpt} />
        </div>
      )}
    </Link>
  );
};

export default NewsTeaser;
