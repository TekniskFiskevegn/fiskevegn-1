import React from "react";
import { graphql } from "gatsby";

import Layout from "../containers/layout";

import Block from "../components/block";
import BlockDesign from "../components/block-design";
import Container from "../components/container";
import InnerContainer from "../components/inner-container";
import Intro from "../components/intro";
import Item from "../components/item";
import List from "../components/list";
import SEO from "../components/seo";
import utils from "../components/utils.module.css";

import GraphQLErrorList from "../components/graphql-error-list";

import { mapEdgesToNodes, filterOutDocsWithoutSlugs, cn } from "../lib/helpers";
import { demoCategories } from "../lib/demo-content";

const Products = props => {
  const page = {};
  const nodes = demoCategories;

  const pageIntro = {
    name: "Categories",
    title: "Total provider of modern fishing solutions",
    text:
      "Since its inception Fiskevegn has built on the core values of quality, delivery and innovation. Our core values have yielded results for both our customer and for us. Fiskevegn is a leading international manufacturer and supplier of fiber, rope, fishing systems for automatic longlining, fishing gears and supplies for crew and vessels. We are proud to be one of the most trusted names in the global arena of longline fishing."
  };

  return (
    <Layout pageClass="" currentPage="products">
      <SEO title="Fiskevegn products" />
      <Container>
        <Block>
          <InnerContainer>
            <Intro {...pageIntro} />
          </InnerContainer>
        </Block>
        <Block>
          <BlockDesign bgImage="/sceneries/scenery-7.jpg" opacityClass="015">
            <InnerContainer>
              <div className={utils.boxShadowSubtle}>
                <List nodes={nodes} listStyle="oneHalf" listItemStyle="nav" />
              </div>
            </InnerContainer>
          </BlockDesign>
        </Block>
      </Container>
    </Layout>
  );
};

export default Products;
