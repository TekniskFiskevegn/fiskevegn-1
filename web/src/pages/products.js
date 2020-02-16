import React from "react";
import { graphql } from "gatsby";
import { cn } from "../lib/helpers";

import Block from "../components/block";
import Container from "../components/container";
import Design from "../components/block-design";
import GraphQLErrorList from "../components/graphql-error-list";
import InnerContainer from "../components/inner-container";
import Intro from "../components/intro";
import Layout from "../containers/layout";
import NavigationItem from "../components/navigation-item";
import SEO from "../components/seo";

// styles
import listStyles from "../components/list.module.css";
// static data
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
  // static nodes
  const nodes = staticProductCategories;

  return (
    <Layout currentPage="products">
      <SEO title="Fiskevegn products" />
      <Container>
        <Block>
          <InnerContainer>
            <Intro {...page.intro} />
          </InnerContainer>
        </Block>
        <Block>
          <Design bgImage="/sceneries/scenery-7.jpg" opacity="015">
            <InnerContainer>
              <ul className={cn(listStyles.ul, listStyles.nav, listStyles.boxShadow)}>
                {nodes &&
                  nodes.map(node => (
                    <li key={node.id}>
                      <NavigationItem {...node} />
                    </li>
                  ))}
              </ul>
            </InnerContainer>
          </Design>
        </Block>
      </Container>
    </Layout>
  );
};

export default ProductsPage;
