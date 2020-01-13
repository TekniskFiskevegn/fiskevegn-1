import React from "react";
import Header from "./header";
import Footer from "./footer";

import "../styles/scaffold.css";
import styles from "./layout.module.css";

const Layout = ({
  children,
  onHideNav,
  onShowNav,
  showNav,
  siteTitle,
  isCustomHeader,
  pageClass = "pageDefault",
  currentPage
}) => (
  <div className={pageClass}>
    <Header
      isCustomHeader={isCustomHeader}
      siteTitle={siteTitle}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
      currentPage={currentPage}
    />
    <div className={styles.content}>{children}</div>
    <Footer />
  </div>
);

export default Layout;
