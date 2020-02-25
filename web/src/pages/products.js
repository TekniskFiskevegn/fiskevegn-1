import React from "react";
import { graphql } from "gatsby";
import { mapEdgesToNodes, cn } from "../lib/helpers";

import Block from "../components/block";
import Container from "../components/container";
import Design from "../components/design";
import GraphQLErrorList from "../components/graphql-error-list";
import InnerContainer from "../components/inner-container";
import Intro from "../components/intro";
import Layout from "../containers/layout";
import Navigation from "../components/navigation";
import SEO from "../components/seo";

export const query = graphql`
  query ProductsPageQuery {
    page: sanityPageProducts {
      _id
      title
      complementaryTitle
      text
      sceneryImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }
    }
    categories: allSanityCategories(limit: 6) {
      edges {
        node {
          id
          title
          teaser
          slug {
            current
          }
        }
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
  const nodes = (data || {}).categories ? mapEdgesToNodes(data.categories) : [];

  if (!page) {
    throw new Error('Missing "page". Open the studio and add some content to this page.');
  }

  return (
    <Layout currentPage="Products">
      <SEO title="Fiskevegn products" />
      <Container>
        <Block>
          <InnerContainer>
            <Intro
              complementaryTitle={page.complementaryTitle}
              title={page.title}
              text={page.text}
            />
          </InnerContainer>
        </Block>
        <Block>
          <Design backgroundImage={page.sceneryImage} opacity="015">
            <InnerContainer>
              <Navigation nodes={nodes} nodeLinksToTemplate="category" />
            </InnerContainer>
          </Design>
        </Block>
      </Container>
    </Layout>
  );
};

export default ProductsPage;
