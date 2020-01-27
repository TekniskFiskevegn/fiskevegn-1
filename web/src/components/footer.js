import React from "react";
import { Link } from "gatsby";
import styles from "./footer.module.css";

function Footer(props) {
  return (
    <footer className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.siteInfo}>
          <h4 hidden>AS Fiskevegn kontaktinformasjon</h4>
          <p>
            <strong>AS Fiskevegn</strong>
            <span>N-6717 Flatraket</span>
            <span>NORWAY</span>
          </p>
          <p>
            <span>+47 57 85 84 00</span>
            <span>facebook.com/fiskevegn</span>
            <a href="#">sales@fiskevegn.no</a>
          </p>
          <p hidden>
            Built with <a href="https://www.sanity.io">Sanity</a> &amp;
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
            by WeBeyond
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
