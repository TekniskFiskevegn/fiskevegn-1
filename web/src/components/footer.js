import React from "react";
import { Link } from "gatsby";
import Disclaimer from "./disclaimer";
import InnerContainer from "./inner-container";
import { uiHomeLink } from "../lib/ui";

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
              <a href={uiHomeLink[props.locale].url} className={styles.linkColor}>
                {props.locale == "en" && <span>Visit our Norwegian website</span>}
                {props.locale == "no" && <span>Visit our English website</span>}
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
