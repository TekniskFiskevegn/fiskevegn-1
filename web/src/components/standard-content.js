import React from "react";
import propTypes from "prop-types";
import { buildImageObj, cn } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import Intro from "./intro";
import List from "./list";

import styles from "./standard-content.module.css";

const StandardContent = props => {
  const { title, complementaryTitle, text, image, listOfImages, email, withBorders } = props;

  return (
    <div className={cn(styles.root, withBorders ? styles.withBorders : "")}>
      <Intro title={title} complementaryTitle={complementaryTitle} text={text} marginBottom />
      <div className={styles.visuals}>{renderImages(image, listOfImages)}</div>
    </div>
  );
};

const renderImages = (image, listOfImages) => {
  if (image) {
    return (
      <img
        src={imageUrlFor(buildImageObj(image))
          .width(1200)
          .height(Math.floor((9 / 16) * 800))
          .url()}
        alt={image.alt}
      />
    );
  } else if (listOfImages && listOfImages.length > 0) {
    return <List style="customListForPartners" listItem="LogoItem" nodes={listOfImages} />;
  } else {
    return <p>Missing image</p>;
  }
};

StandardContent.propTypes = {};

export default StandardContent;
