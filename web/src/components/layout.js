import React from "react";
import Header from "./header";

// Global styles included
import "../styles/layout.css";

// Layout specific styles
import styles from "./layout.module.css";
import flex from "./flex.module.css";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle, isFrontpage }) => (
  <>
    <Header
      isFrontpage={isFrontpage}
      siteTitle={siteTitle}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
    />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      {/* <svg
        id="footer__wave"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 3000 115.42"
      >
        <g>
          <path
            id="FooterWave1"
            fill="#242424"
            d="M3000,24.341 C3000,24.341 2737.235,32.801 2521.235,9.691 2305.235,-13.41 2049.425,13.826 1914.534,31.666 1779.645,49.506 1552.185,44.009 1407.185,24.341 1262.185,4.677 1031.234,-3.865 865.235,17.016 699.235,37.906 531.685,44.174 362.684,31.666 193.684,19.156 0,24.341 0,24.341 0,57.671 0,91.001 0,124.341 1000,124.341 2000,124.341 3000,124.341 3000,91.001 3000,57.671 3000,24.341 z"
            data-original="M3000,15.42s-299.39,23.11-515.39,0-501.11-17.84-636,0-377,19.66-522,0-332-20.89-498,0-231,12.5-400,0S0,15.42,0,15.42v100H3000Z"
          ></path>
        </g>
      </svg> */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#FD8E13"
          fill-opacity="1"
          d="M0,192L60,208C120,224,240,256,360,240C480,224,600,160,720,138.7C840,117,960,139,1080,144C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <div className={styles.footerWrapper}>
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
  </>
);

export default Layout;
