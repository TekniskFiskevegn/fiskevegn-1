import React from "react";
import Header from "./header";
import Footer from "./footer";

import "../styles/scaffold.css";
import styles from "./layout.module.css";

const Layout = ({ children, ...rest }) => (
  <div>
    <Header {...rest} />
    <div className={styles.content}>{children}</div>
    <Footer {...rest} />
  </div>
);

export default Layout;
