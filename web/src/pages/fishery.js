import React from "react";
import { graphql } from "gatsby";
import { mapEdgesToNodes, cn } from "../lib/helpers";

import Block from "../components/block";
import Design from "../components/block-design";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import GoBack from "../components/go-back";
import InnerContainer from "../components/inner-container";
import Intro from "../components/intro";
import Layout from "../containers/layout";
import NavigationItem from "../components/navigation-item";
import SEO from "../components/seo";

// css
import utilStyles from "../components/utils.module.css";
import listStyles from "../components/list.module.css";

// static data
import { staticFisheryPage } from "../lib/static";

export const query = graphql`
  query FisheryProductsQuery {
    products: allSanityProducts(limit: 10) {
      edges {
        node {
          id
          name
          teaser
          slug {
            current
          }
        }
      }
    }
  }
`;

const FisheryPage = props => {
  const { data, errors } = props;
  console.log("log 'fishery page' data", data);
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const page = staticFisheryPage;
  const nodes = (data || {}).products ? mapEdgesToNodes(data.products) : [];

  return (
    <Layout pageClass="" currentPage="products">
      <SEO title="Fiskevegn Fishery" />
      <Container>
        <Block>
          <InnerContainer>
            <GoBack href="/products" />
            <Intro {...page.intro} />
          </InnerContainer>
        </Block>
        <Block>
          <Design bgImage="/sceneries/scenery-1.jpg" opacityClass="015">
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

export default FisheryPage;
