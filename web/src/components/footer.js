import { Link } from "gatsby";
import React from "react";

import utils from "./utils.module.css";
import styles from "./footer.module.css";

function Footer(props) {
  return (
    <footer className={styles.root}>
      {/* <div className={styles.waveContainer}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path
            fill="#F3F4F5"
            fillOpacity="1"
            d="M0,64L60,58.7C120,53,240,43,360,42.7C480,43,600,53,720,53.3C840,53,960,43,1080,48C1200,53,1320,75,1380,85.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div> */}

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
