import React from "react";
import { Link } from "gatsby";
import { cn } from "../lib/helpers";
import styles from "./meta.module.css";

const Meta = props => {
  const { isContact, isBrowseMore } = props;
  if (isContact) {
    const { title, text, phone, email, map } = props;
    return (
      <div className={styles.root}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {text && <p className={styles.text}>{text}</p>}

        {phone && (
          <div className={styles.newLine}>
            <a href="#" className={styles.link}>
              {phone}
            </a>
          </div>
        )}
        {email && (
          <div className={styles.newLine}>
            <a href="#" className={styles.link}>
              {email}
            </a>
          </div>
        )}
        {map && (
          <div className={styles.newLine}>
            <a href={map} className={styles.link}>
              Google maps
            </a>
          </div>
        )}
      </div>
    );
  }
  if (isBrowseMore) {
    const { browseMoreHref, browseMoreText } = props;
    return (
      <div className={styles.root}>
        <Link className={styles.link} to={browseMoreHref}>
          {browseMoreText}
        </Link>
      </div>
    );
  }
  return null;
};

Meta.DefaultProps = {};

export default Meta;
