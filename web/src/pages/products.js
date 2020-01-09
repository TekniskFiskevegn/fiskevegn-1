import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";
import Layout from "../containers/layout";
import Container from "../components/container";
import InnerContainer from "../components/inner-container";
import Block from "../components/block";
import BlockDesign from "../components/block-design";
import Intro from "../components/intro";
import List from "../components/list";
import Card from "../components/card";

import utils from "../components/utils.module.css";

import GraphQLErrorList from "../components/graphql-error-list";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs, cn } from "../lib/helpers";

// export const query = graphql`
//   query AboutQuery {
//     about: allSanityProject(
//       limit: 12
//       sort: { fields: [publishedAt], order: DESC }
//       filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
//     ) {
//       edges {
//         node {
//           id
//           mainImage {
//             asset {
//               _id
//             }
//             alt
//           }
//           title
//           _rawExcerpt
//           slug {
//             current
//           }
//         }
//       }
//     }
//   }
// `;

const Products = props => {
  return (
    <Layout pageClass="" currentPage="products">
      <SEO title="Fiskevegn products" />
      <Container>
        <Block>
          <InnerContainer>
            <Intro
              name="products"
              title="Modern fishing solutions"
              text="Since its inception, Fiskevegn has been founded on the core values of quality,
            delivery and innovation. We emphasize close communication with our customers and rapid
            responses to deliver better products, solutions and services. Our core values have
            yielded results both for our customers and for us. We are proud to be one of the most
            trusted names in the global arena of longline fishing."
            />
          </InnerContainer>
        </Block>
        <Block>
          <BlockDesign bgImage="/bering-sea.jpg" opacityClass="medium">
            <InnerContainer>
              <div className={utils.boxShadow}>
                <List type="fiftyfifty" noGap>
                  <Card
                    title="Fishery"
                    text="Sustainable solutions towards safer, cleaner oceans. sustainable solutions"
                    linkSrc="/product-category"
                    imgSrc="/fishery.jpg"
                    styling={{ flat: true, opacity: true }}
                  />

                  <Card
                    title="Aquaculture"
                    text="Sustainable solutions towards safer, cleaner oceans. sustainable solutions"
                    linkSrc="/product-category"
                    imgSrc="/rope-2.jpg"
                    styling={{ flat: true, opacity: true }}
                  />

                  <Card
                    title="Ropes"
                    text="Sustainable solutions towards safer, cleaner oceans. sustainable solutions"
                    linkSrc="/product-category"
                    imgSrc="/rope-2.jpg"
                    styling={{ flat: true, opacity: true }}
                  />

                  <Card
                    title="General supplies"
                    text="Sustainable solutions towards safer, cleaner oceans. sustainable solutions"
                    linkSrc="/product-category"
                    imgSrc="/fishery.jpg"
                    styling={{ flat: true, opacity: true }}
                  />
                </List>
              </div>
            </InnerContainer>
          </BlockDesign>
        </Block>
      </Container>
    </Layout>
  );
};

export default Products;
