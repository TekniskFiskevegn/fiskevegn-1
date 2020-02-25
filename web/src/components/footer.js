import React from "react";
import { Link } from "gatsby";
import Disclaimer from "./disclaimer";
import InnerContainer from "./inner-container";
import { homeLink } from "../lib/ui";

import styles from "./footer.module.css";

function Footer(props) {
  return (
    <footer className={styles.root}>
      <InnerContainer>
        <div className={styles.wrapper}>
          <div className={styles.siteInfo}>
            <p>
              <span className={styles.title}>AS Fiskevegn</span>
              N-6717 Flatraket
              <br />
              NORWAY
            </p>

            <p>
              +47 57 85 84 00
              <br />
              facebook.com/fiskevegn
              <br />
              <a className={styles.link} href="mailto:sales@fiskevegn.no">
                sales@fiskevegn.no
              </a>
            </p>
            <p>
              <a href={homeLink[props.locale].link} className={styles.linkColor}>
                {props.locale == "default" && (
                  <a href="/no" className={styles.linkColor}>
                    Visit our Norwegian website
                  </a>
                )}
                {props.locale == "no" && (
                  <a href="/" className={styles.linkColor}>
                    Visit our English website
                  </a>
                )}
              </a>
            </p>
            <Disclaimer />
          </div>
        </div>
      </InnerContainer>
    </footer>
  );
}

export default Footer;
