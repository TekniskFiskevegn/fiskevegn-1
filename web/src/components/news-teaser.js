import { Link } from "gatsby";
import React from "react";
import { cn, buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import SanityBlockText from "./sanity-block-text";

import styles from "./news-teaser.module.css";
import { responsiveTitle3 } from "./typography.module.css";

function NewsTeaser(props) {
  console.log("newsteaser", props);
  return (
    <p>bar</p>
    // <Link className={styles.root} to={`/news/${props.slug.current}`}>
    //   <div className={styles.leadMediaThumb}>
    //     {props.mainImage && props.mainImage.asset && (
    //       <img
    //         src={imageUrlFor(buildImageObj(props.mainImage))
    //           .width(600)
    //           .height(Math.floor((9 / 16) * 600))
    //           .url()}
    //         alt={props.mainImage.alt}
    //       />
    //     )}
    //   </div>
    //   <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
    //   {props._rawExcerpt && (
    //     <div className={styles.excerpt}>
    //       <SanityBlockText blocks={props._rawExcerpt} />
    //     </div>
    //   )}
    // </Link>
  );
}

export default NewsTeaser;
