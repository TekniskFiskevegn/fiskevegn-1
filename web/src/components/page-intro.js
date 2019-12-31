import React from "react";
import { graphql } from "gatsby";

import Container from "../components/container";
import Layout from "../containers/layout";

import GraphQLErrorList from "../components/graphql-error-list";
import HorizontalList from "../components/horizontal-list";
import List from "../components/list";
import Card from "../components/card";
import SEO from "../components/seo";

import styles from "./page-intro.module.css";
import utils from "../components/utils.module.css";
import pages from "../components/pages.module.css";
import { responsiveTitle1 } from "../components/typography.module.css";

import { mapEdgesToNodes, filterOutDocsWithoutSlugs, cn } from "../lib/helpers";

const PageIntro = props => {
  const { tinyTitle, title, text } = props;
  return (
    <section className={styles.root}>
      <div className={utils.centeredText}>
        <span className={utils.tinyTitle}>{tinyTitle}</span>
        <h2 className={responsiveTitle1}>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
};

export default PageIntro;
