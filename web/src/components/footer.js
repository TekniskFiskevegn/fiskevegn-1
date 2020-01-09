import { Link } from "gatsby";
import React from "react";

import utils from "./utils.module.css";
import styles from "./footer.module.css";

function Footer(props) {
  return (
    <footer className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.siteInfo}>
          <p>
            <strong>AS Fiskevegn</strong>
            <br />
            N-6717 Flatraket
            <br />
            NORWAY
          </p>
          <p>
            +47 57 85 84 00
            <br />
            <a href="#">post@fiskevegn.no</a>
          </p>
          <p hidden>
            Built with <a href="https://www.sanity.io">Sanity</a> &amp;
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
