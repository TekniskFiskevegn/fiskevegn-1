import React from "react";
import Disclaimer from "./disclaimer";
import InnerContainer from "./inner-container";

import styles from "./footer.module.css";

function Footer(props) {
  return (
    <footer className={styles.root}>
      <InnerContainer>
        <div className={styles.wrapper}>
          <div className={styles.siteInfo}>
            <p>
              <span className={styles.title}>AS Fiskevegn</span>
              <span>N-6717 Flatraket</span>
              <span>NORWAY</span>
            </p>
            <p>
              <span>+47 57 85 84 00</span>
              <span>facebook.com/fiskevegn</span>
              <a href="mailto:sales@fiskevegn.no">sales@fiskevegn.no</a>
            </p>
          </div>
        </div>
        <Disclaimer />
      </InnerContainer>
    </footer>
  );
}

export default Footer;
