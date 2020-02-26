import React from "react";
import { LOG_IS_ACTIVE } from "../../sytalaust";
import { log } from "../lib/helpers";
import Header from "./header";
import Footer from "./footer";

import "../styles/scaffold.css";
import styles from "./layout.module.css";

const Layout = ({ children, ...rest }) => {
  if (LOG_IS_ACTIVE) log(rest.location.pathname, rest);
  return (
    <div>
      <Header {...rest} />
      <div className={styles.content}>{children}</div>
      <Footer {...rest} />
    </div>
  );
};

export default Layout;
