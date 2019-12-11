import React from "react";
import Header from "./header";
import Footer from "./footer";

// Global styles included
import "../styles/layout.css";

// Layout specific styles
import styles from "./layout.module.css";

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
    <Footer />
  </>
);

export default Layout;
