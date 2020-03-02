import React from "react";
import { LOG_IS_ACTIVE } from "../../sytalaust";
import { log } from "../lib/helpers";
import Header from "./header";
import Footer from "./footer";

import "../styles/scaffold.css";
import styles from "./layout.module.css";

const Layout = ({
  children,
  siteTitle,
  onHideNav,
  onShowNav,
  showNav,
  isCustomHeader,
  currentPage,
  location,
  locale,
  info
}) => {
  if (LOG_IS_ACTIVE) log(location.pathname, info);
  return (
    <div>
      <Header
        onHideNav={onHideNav}
        onShowNav={onShowNav}
        showNav={showNav}
        siteTitle={siteTitle}
        isCustomHeader={isCustomHeader}
        currentPage={currentPage}
        location={location}
        locale={locale}
      />
      <div className={styles.content}>{children}</div>
      <Footer locale={locale} />
    </div>
  );
};

export default Layout;
