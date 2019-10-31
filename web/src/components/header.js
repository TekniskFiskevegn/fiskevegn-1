import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";

import styles from "./header.module.css";

const Header = ({ onHideNav, onShowNav, showNav, siteTitle, isFrontpage }) => (
  <div className={cn(styles.root, isFrontpage && styles.isFrontpage)}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to="/" className="uSlab">
          {siteTitle}
        </Link>
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol="hamburger" />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to="/about/">Om oss</Link>
          </li>
          <li>
            <Link to="/about/">Produkter</Link>
          </li>
          <li>
            <Link to="/about/">Tjenester</Link>
          </li>
          <li>
            <Link to="/archive/">Kontakt</Link>
          </li>
          <li>
            <Link to="/archive/">Archive</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;