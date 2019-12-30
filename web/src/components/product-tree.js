import React from "react";
import { graphql } from "gatsby";

import Container from "../components/container";
import Layout from "../containers/layout";

import GraphQLErrorList from "../components/graphql-error-list";
import HorizontalList from "../components/horizontal-list";
import List from "../components/list";
import Card from "../components/card";
import SEO from "../components/seo";

import utils from "../components/utils.module.css";
import pages from "../components/pages.module.css";
import { responsiveTitle1 } from "../components/typography.module.css";

import { mapEdgesToNodes, filterOutDocsWithoutSlugs, cn } from "../lib/helpers";

const ProductTree = props => {
  return (
    <Layout pageClass={pages.products}>
      <SEO title="Fiskevegn products" />
      <Container>
        <div className={utils.verticalFlow}>
          <section>
            <h2>Meny</h2>
            <ul>
              <li>foo</li>
            </ul>
          </section>
        </div>
      </Container>
    </Layout>
  );
};

export default ProductTree;
