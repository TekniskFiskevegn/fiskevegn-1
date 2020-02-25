import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";

import { menuLinks } from "../lib/ui";

import styles from "./header.module.css";

const handleClick = () => {
  console.log("handle click");
};

const Header = ({ onHideNav, onShowNav, showNav, siteTitle, isCustomHeader, currentPage }) => (
  <div className={cn(styles.root, isCustomHeader && styles.customHeader)}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to="/">
          <img src="/logo.png" alt="Fiskevegn" />
          <h1 hidden>{siteTitle}</h1>
        </Link>
        <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
          <Icon symbol={showNav ? "foo" : "hamburger"} />
        </button>
      </div>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          {menuLinks.map((item, i) => {
            console.log("log menuitem", currentPage, item.name);
            return (
              <li>
                <Link className={currentPage == item.name ? styles.activeLink : ""} to={item.link}>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  </div>
);

Header.DefaultProps = {
  isCustomHeader: false
};

export default Header;
