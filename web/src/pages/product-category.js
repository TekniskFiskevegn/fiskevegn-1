import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";
import Layout from "../containers/layout";
import Container from "../components/container";
import InnerContainer from "../components/inner-container";
import Block from "../components/block";
import BlockDesign from "../components/block-design";
import BreadCrumb from "../components/breadcrumb";
import Svg from "../components/svg";
import Intro from "../components/intro";
import List from "../components/list";
import Item from "../components/item";
import utils from "../components/utils.module.css";

import GraphQLErrorList from "../components/graphql-error-list";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs, cn } from "../lib/helpers";
import { demoProducts } from "../lib/demo-content";

const ProductCategory = props => {
  const nodes = demoProducts;

  return (
    <Layout pageClass="" currentPage="products">
      <SEO title="Fiskevegn Fishery" />

      <Container>
        <Block>
          <InnerContainer>
            <Intro
              backButton
              backTo="/products"
              name="Category"
              title="Fishery"
              text="Since its inception, Fiskevegn has been founded on the core values of quality,
            delivery and innovation. We emphasize close communication with our customers and rapid
            responses to deliver better Fishery, solutions and services. Our core values have
            yielded results both for our customers."
            />
          </InnerContainer>
        </Block>
        <Block>
          <BlockDesign bgImage="/sceneries/scenery-1.jpg" opacityClass="015">
            <InnerContainer>
              <div className={utils.boxShadowSubtle}>
                <List nodes={nodes} listStyle="oneHalf" listItemStyle="navMember" />
              </div>
            </InnerContainer>
          </BlockDesign>
        </Block>
      </Container>
    </Layout>
  );
};

export default ProductCategory;
