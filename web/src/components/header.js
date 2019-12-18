import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";

import styles from "./header.module.css";

const Header = ({ onHideNav, onShowNav, showNav, siteTitle, isFrontpage }) => (
  <div className={cn(styles.root, isFrontpage && styles.isFrontpage)}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to="/">
          <img src="/logo.png" alt="Fiskevegn" />
          <h1 hidden>{siteTitle}</h1>
        </Link>
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol="hamburger" />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/products/">Products</Link>
          </li>
          <li>
            <Link to="/about/">Services</Link>
          </li>
          <li>
            <Link to="/about/">Contact</Link>
          </li>
          <li>
            <Link to="/about/">Language</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;
