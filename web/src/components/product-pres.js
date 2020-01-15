import React from "react";
import PropTypes from "prop-types";
import { cn } from "../lib/helpers";
import styles from "./product-pres.module.css";
import utils from "./utils.module.css";

const ProductPres = props => {
  if (!props) {
    return null;
  }

  const { title, text, img, reverse } = props;
  return (
    <div className={cn(styles.root, reverse ? styles.reverse : "")}>
      <div className={styles.first}>
        <div>
          <h2 className={styles.title}>{title}</h2>
          <p>{text}</p>
          <a href="" className={utils.defaultLink}>
            Download specification
          </a>
        </div>
      </div>
      <div className={styles.second}>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

ProductPres.defaultProps = {};

export default ProductPres;
