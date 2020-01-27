import React from "react";
import { Link } from "gatsby";
import { buildImageObj, cn } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import Intro from "../components/intro";
import Meta from "../components/meta";
import styles from "./promoted.module.css";
import utils from "./utils.module.css";
import { responsiveTitle2, responsiveTitle3 } from "./typography.module.css";

// {
//   intro: {},
//   visuals: {},
//   content: {},
//   meta: {},
//   styling: {}
// }

const Promoted = ({ intro = {}, visuals = {}, content = {}, meta = {}, styling = {} }) => {
  const { image, staticImage, svg } = visuals;
  const { largeTitle, title, smallTitle, text } = content;
  const { browseMoreHref, browseMoreText } = meta;
  const { reverseFlow } = styling;

  return (
    <div className={styles.root}>
      <Intro {...intro} margin />
      <div className={cn(styles.wrapper, reverseFlow ? styles.reverseFlow : "")}>
        <div className={styles.visuals}>
          {image && (
            <img
              src={imageUrlFor(buildImageObj(image))
                .width(700)
                .height(Math.floor((9 / 16) * 700))
                .fit("crop")
                .url()}
              alt={image.alt}
            />
          )}
          {staticImage && <img src={staticImage} alt="" />}
        </div>
        <div className={cn(styles.content, utils.boxShadowMoreSubtle)}>
          <div>
            {largeTitle && <h3 className={responsiveTitle2}>{title}</h3>}
            {title && <h3 className={responsiveTitle3}>{title}</h3>}
            {text && <p>{text}</p>}
            {meta && <Meta />}
            {/* {browseMoreHref && (
              <Link to={browseMoreHref} className={utils.callToActionLink}>
                {browseMoreText}
              </Link>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

Promoted.DefaultProps = {
  intro: {}
};

export default Promoted;
