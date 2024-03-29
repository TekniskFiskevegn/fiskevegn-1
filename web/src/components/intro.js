import React from "react";
import { format, distanceInWords, differenceInDays } from "date-fns";
import PropTypes from "prop-types";
import { cn } from "../lib/helpers";

import styles from "./intro.module.css";

const Intro = ({
  complementaryTitle,
  title,
  text,
  publishedAt,
  marginBottom = false,
  marginBottomSmall = false,
  textAlignLeft = false,
  dropMarginOnTitle = false,
  borderBottom = false
}) => {
  return (
    <div
      className={cn(
        styles.root,
        marginBottom ? styles.marginBottom : "",
        marginBottomSmall ? styles.marginBottomSmall : "",
        textAlignLeft ? styles.textAlignLeft : "",
        dropMarginOnTitle ? styles.dropMarginOnTitle : "",
        borderBottom ? styles.borderBottom : ""
      )}
    >
      {complementaryTitle && (
        <span className={styles.complementaryTitle}>{complementaryTitle}</span>
      )}
      {/* {publishedAt && (
        <span className={styles.publishedAt}>
          {differenceInDays(new Date(publishedAt), new Date()) > 3
            ? distanceInWords(new Date(publishedAt), new Date())
            : format(new Date(publishedAt), 'MMMM Do YYYY')}
        </span>
      )} */}
      {title && <h2 className={styles.title}>{title}</h2>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
};

Intro.propTypes = {
  complementaryTitle: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  margin: PropTypes.bool
};

export default Intro;
