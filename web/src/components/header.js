import React from "react";
import { Link } from "gatsby";
import Icon from "./icon";
import { cn } from "../lib/helpers";
import { getPageStructure } from "../../sytalaust";

import styles from "./header.module.css";

const pageStructure = getPageStructure();
const menuLinks = pageStructure.filter((page, i) => {
  return page.nav.showInMenu;
});

const Header = ({ locale, location, onHideNav, onShowNav, showNav, siteTitle, isCustomHeader }) => {
  return (
    <div className={cn(styles.root, isCustomHeader && styles.customHeader)}>
      <div className={styles.wrapper}>
        <div className={styles.branding}>
          <Link to={locale == "en" ? "/" : "/no"}>
            <img src="/logo.png" alt="Fiskevegn" />
            <h1 hidden>{siteTitle}</h1>
          </Link>
          <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
            <Icon symbol={showNav ? "close" : "hamburger"} />
          </button>
        </div>

        <nav className={cn(styles.nav, showNav && styles.showNav)}>
          <ul>
            {menuLinks.map((item, i) => {
              return (
                <li key={i}>
                  <Link
                    to={item.nav[locale].url}
                    className={
                      location.pathname.includes(item.nav[locale].url) ? styles.activeLink : ""
                    }
                  >
                    {item.nav[locale].displayName}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
