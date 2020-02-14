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
import { staticProductCategories } from "../lib/static";

export const query = graphql`
  query ProductsPageQuery {
    page: sanityProductsPage {
      _id
      intro {
        name
        title
        text
      }
    }
  }
`;

const ProductsPage = props => {
  const { data, errors } = props;
  console.log("log 'product page' data", data);
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const page = (data || {}).page;
  const nodes = staticProductCategories;

  return (
    <Layout pageClass="" currentPage="products">
      <SEO title="Fiskevegn products" />
      <Container>
        <Block>
          <InnerContainer>
            <Intro {...page.intro} />
          </InnerContainer>
        </Block>
        <Block>
          <BlockDesign bgImage="/sceneries/scenery-7.jpg" opacityClass="015">
            <InnerContainer>
              <div className={utils.boxShadowSubtle}>
                <List nodes={nodes} listStyle="nav" listItemStyle="nav" />
              </div>
            </InnerContainer>
          </BlockDesign>
        </Block>
      </Container>
    </Layout>
  );
};

export default ProductsPage;
