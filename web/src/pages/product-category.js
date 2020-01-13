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

const ProductCategory = props => {
  return (
    <Layout pageClass="" currentPage="products">
      <SEO title="Fiskevegn Fishery" />

      <Container>
        <InnerContainer>
          <BreadCrumb goBack="/products" />
        </InnerContainer>
        <Block>
          <InnerContainer>
            <Intro
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
          <BlockDesign bgImage="/scenery-1.jpg" opacityClass="015">
            <InnerContainer>
              <div className={utils.boxShadow}>
                <List type="fiftyfifty" oddBorder noGap>
                  <Card
                    title="Automatic longline systems"
                    text="Sustainable solutions towards safer, cleaner oceans. sustainable solutions"
                    linkSrc="/product-template"
                    styling={{ flat: true, opacity: true, subtle: true }}
                  />

                  <Card
                    title="Longlining"
                    text="Sustainable solutions towards safer, cleaner oceans. sustainable solutions"
                    linkSrc="/not-found"
                    styling={{ flat: true, opacity: true, subtle: true }}
                  />

                  <Card
                    title="Gillnetting"
                    text="Sustainable solutions towards safer, cleaner oceans. sustainable solutions"
                    linkSrc="/not-found"
                    styling={{ flat: true, opacity: true, subtle: true }}
                  />

                  <Card
                    title="Trawl fishery"
                    text="Sustainable solutions towards safer, cleaner oceans. sustainable solutions"
                    linkSrc="/product-template-1"
                    styling={{ flat: true, opacity: true, subtle: true }}
                  />
                  <Card
                    title="Waste handling"
                    text="Sustainable solutions towards safer, cleaner oceans. sustainable solutions"
                    linkSrc="/not-found"
                    styling={{ flat: true, opacity: true, subtle: true }}
                  />
                  <Card
                    title="All catalouges"
                    text="Sustainable solutions towards safer, cleaner oceans. sustainable solutions"
                    linkSrc="/product-template"
                    styling={{ flat: true, opacity: true, subtle: true }}
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

export default ProductCategory;
