import React from "react";
import { graphql } from "gatsby";

import Container from "../components/container";
import Layout from "../containers/layout";

import GraphQLErrorList from "../components/graphql-error-list";
import HorizontalList from "../components/horizontal-list";
import List from "../components/list";
import Card from "../components/card";
import SEO from "../components/seo";

import styles from "./product-tree.module.css";
import utils from "../components/utils.module.css";
import pages from "../components/pages.module.css";
import { responsiveTitle4 } from "../components/typography.module.css";

import { mapEdgesToNodes, filterOutDocsWithoutSlugs, cn } from "../lib/helpers";

const ProductTree = props => {
  return (
    <section className={styles.root}>
      <h2 className={styles.menuTitle}>Fishery</h2>
      <ul className={styles.list}>
        <li>Automatic longline systems</li>
        <li>
          Longlining
          {/* <ul className={styles.nestedList}>
              <li>Gillnets</li>
              <li>Gillnet service</li>
              <li>Cobra floatline</li>
              <li>Sinking ropes</li>
              <li>Crystal cobra sinking rope</li>
            </ul> */}
        </li>
        <li>Gillnetting</li>
        <li>Trawl fishery</li>
        <li>Waste handling</li>
      </ul>
    </section>
  );
};

export default ProductTree;
