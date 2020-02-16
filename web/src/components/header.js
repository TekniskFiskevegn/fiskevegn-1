import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";
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
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol="hamburger" />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to="/shop/" className={currentPage === "shop" ? styles.activeLink : ""}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/about/" className={currentPage === "about" ? styles.activeLink : ""}>
              About
            </Link>
          </li>
          <li>
            <Link to="/products/" className={currentPage === "products" ? styles.activeLink : ""}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/services" className={currentPage === "services" ? styles.activeLink : ""}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact/" className={currentPage === "contact" ? styles.activeLink : ""}>
              Contact
            </Link>
          </li>
          {/* <li>
            <Link to="/not-found">Language</Link>
          </li> */}
        </ul>
      </nav>
    </div>
  </div>
);

Header.DefaultProps = {
  isCustomHeader: false
};

export default Header;
