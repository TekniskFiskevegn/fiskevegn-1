import React from "react";
import { Link } from "gatsby";
import { cn, buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import SanityBlockText from "./sanity-block-text";

import styles from "./news-teaser.module.css";
import utils from "./utils.module.css";
//comment
const NewsTeaser = props => {
  console.log("log props newsteaser", props);
  const url =
    props.locale === "en" ? `/news/${props.slug.current}` : `/no/nyheter/${props.slug.current}`;
  return (
    <Link className={styles.root} to={url}>
      <div className={utils.relative}>
        {props.image && props.image.asset && (
          <img
            className={styles.image}
            src={imageUrlFor(buildImageObj(props.image))
              .width(800)
              .height(800)
              .fit("crop")
              .url()}
            alt={props.image.alt}
          />
        )}

        <h3
          className={cn(styles.featureText, utils.absolute, utils.textRight, utils.wFull, utils.h2)}
        >
          {props.title}
        </h3>
      </div>
    </Link>
  );
};

export default NewsTeaser;
