import React from "react";
import PropTypes from "prop-types";
import { cn } from "../lib/helpers";
import styles from "./presentation.module.css";
import { defaultLink } from "./utils.module.css";
import { responsiveTitle1 } from "./typography.module.css";

const Presentation = props => {
  if (!props) {
    return null;
  }

  const { title, text, image, reverseFlow } = props;
  return (
    <div className={cn(styles.root, reverseFlow ? styles.reverseFlow : "")}>
      <div className={styles.text}>
        <div>
          <h2 className={styles.title}>{title}</h2>
          {/* <p>{text}</p> */}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit illo molestiae
            aperiam eius necessitatibus aut quae at inventore? Doloribus dolore accusantium deleniti
            praesentium reiciendis aperiam, quo doloremque mollitia. Magnam, doloribus!
          </p>
          <a href="" className={defaultLink}>
            Download specification
          </a>
        </div>
      </div>
      <div className={styles.visuals}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

Presentation.defaultProps = {};

export default Presentation;
