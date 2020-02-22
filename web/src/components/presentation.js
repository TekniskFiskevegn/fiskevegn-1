import React from "react";
import propTypes from "prop-types";
import { buildImageObj, cn } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import List from "./list";

import styles from "./presentation.module.css";
import { defaultLink } from "./utils.module.css";

const Presentation = props => {
  const { title, text, image, listOfImages, email, reverseFlow } = props;

  return (
    <div className={cn(styles.root, reverseFlow ? styles.reverseFlow : "")}>
      <div className={styles.text}>
        <div>
          <h2 className={styles.title}>{title}</h2>
          <p>{text}</p>
          {email && <a className={defaultLink}>{email}</a>}
        </div>
      </div>
      <div className={styles.visuals}>{renderImages(image, listOfImages)}</div>
    </div>
  );
};

const renderImages = (image, listOfImages) => {
  if (image) {
    return (
      <img
        src={imageUrlFor(buildImageObj(image))
          .width(700)
          .height(Math.floor((9 / 16) * 700))
          .fit("crop")
          .url()}
        alt={image.alt}
      />
    );
  } else if (listOfImages && listOfImages.length > 0) {
    return <List style="oneHalfAllTheWay" listItem="ImageItem" nodes={listOfImages} />;
  } else {
    return <p>Missing image</p>;
  }
};

Presentation.propTypes = {};

export default Presentation;
