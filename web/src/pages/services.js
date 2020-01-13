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
    <Layout pageClass="" currentPage="services">
      <SEO title="Fiskevegn products" />
      <Container>
        <Block>
          <InnerContainer>
            <Intro
              name="Services"
              title="Industry know-how"
              text="Fiskevegn supplies business-essential products and services. Supplying the ocean-going fishing fleet in particular can be compared to servicing the airline industry. Many ocean-going fishing vessels barely touch base before returning back to sea. Also for coastal vessels, the reality is that if essensial equipment breaks down or gears are lost, there may be no choice but to return to port while losing time and revenues. "
            />
          </InnerContainer>
        </Block>
        <Block>
          <BlockDesign bgImage="/scenery-6.jpg" opacityClass="015">
            <InnerContainer>
              <div className={utils.boxShadow}>
                <List type="fiftyfifty" noGap oddBorder>
                  <Card
                    title="Fishery development"
                    text="Sustainable solutions towards safer, cleaner oceans. sustainable solutions"
                    linkSrc="/not-found"
                    // imgSrc="/fishery.jpg"
                    styling={{ flat: true, opacity: true }}
                  />

                  <Card
                    title="Project planning"
                    text="Sustainable solutions towards safer, cleaner oceans. sustainable solutions"
                    linkSrc="/not-found"
                    // imgSrc="/rope-2.jpg"
                    styling={{ flat: true, opacity: true }}
                  />

                  <Card
                    title="Bespoke engineering"
                    text="Sustainable solutions towards safer, cleaner oceans. sustainable solutions"
                    linkSrc="/not-found"
                    // imgSrc="/rope-2.jpg"
                    styling={{ flat: true, opacity: true }}
                  />

                  <Card
                    title="Research collaboration"
                    text="Sustainable solutions towards safer, cleaner oceans. sustainable solutions"
                    linkSrc="/not-found"
                    // imgSrc="/fishery.jpg"
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
