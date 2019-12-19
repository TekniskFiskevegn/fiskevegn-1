import React from "react";
import Header from "./header";
import Footer from "./footer";

// Scaffold styles
import "../styles/scaffold.css";

// Layout specific styles
import styles from "./layout.module.css";

const Layout = ({
  children,
  onHideNav,
  onShowNav,
  showNav,
  siteTitle,
  isFrontpage,
  pageClass = "pageDefault"
}) => (
  <div className={pageClass}>
    <Header
      isFrontpage={isFrontpage}
      siteTitle={siteTitle}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
    />
    <div className={styles.content}>{children}</div>
    <Footer />
  </div>
);

export default Layout;
