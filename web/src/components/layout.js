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
