import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";

import { menuLinks, homeLink } from "../lib/ui";

import styles from "./header.module.css";

const handleClick = () => {
  console.log("handle click");
};

const Header = ({
  locale,
  onHideNav,
  onShowNav,
  showNav,
  siteTitle,
  isCustomHeader,
  currentPage
}) => {
  console.log("log locale in header", locale);

  return (
    <div className={cn(styles.root, isCustomHeader && styles.customHeader)}>
      <div className={styles.wrapper}>
        <div className={styles.branding}>
          <Link to={homeLink[locale].link}>
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
                <li>
                  <Link
                    className={currentPage == item[locale].name ? styles.activeLink : ""}
                    to={item[locale].link}
                  >
                    {item[locale].name}
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

Header.DefaultProps = {
  isCustomHeader: false
};

export default Header;
