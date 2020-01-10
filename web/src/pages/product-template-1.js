import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";
import Layout from "../containers/layout";
import Hero from "../components/hero";
import BreadCrumb from "../components/breadcrumb";
import Container from "../components/container";
import InnerContainer from "../components/inner-container";
import Block from "../components/block";
import BlockDesign from "../components/block-design";
import Intro from "../components/intro";
import List from "../components/list";
import Card from "../components/card";

import utils from "../components/utils.module.css";
import styles from "../components/product-data.module.css";

import GraphQLErrorList from "../components/graphql-error-list";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs, cn } from "../lib/helpers";
import Svg from "../components/svg";
import VerticalRhythm from "../components/vertical-rhythm";

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

const ProductTemplate = props => {
  return (
    <Layout pageClass="" currentPage="products" isCustomHeader={true}>
      <SEO title="Fiskevegn Fishery" />
      <Hero demo demoSrc="/ropes-2.jpg" low />
      <Container>
        {/* <InnerContainer>
          <BreadCrumb add />
        </InnerContainer> */}
        <Block>
          <InnerContainer>
            <Intro
              name="Fishery"
              title="Trawl fishery"
              text="Since its inception, Fiskevegn has been founded on the core values of quality,
            delivery and innovation. We emphasize close communication with our customers and rapid
            responses to deliver better Fishery, solutions and services. Our core values have
            yielded results both for our customers."
            />
          </InnerContainer>
        </Block>
        <Block>
          <InnerContainer>
            <List type="justifiedCenter">
              <a className={utils.callToAction} href="">
                Warps
              </a>
              <a className={utils.callToAction} href="">
                Gilsons
              </a>
              <a className={utils.callToAction} href="">
                Backstrops
              </a>
              <a className={utils.callToAction} href="">
                Sweeplines
              </a>
            </List>
          </InnerContainer>
        </Block>
        <Block>
          <BlockDesign bgImage="/scenery-2.jpg" opacityClass="085">
            <VerticalRhythm>
              <InnerContainer>
                <div className={styles.wrapper}>
                  <div className={styles.firstColumn}>
                    {/* <Svg blob={{ blobTitle: "Factsheet", asBackground: true }} number="1" /> */}
                    Download factsheet
                  </div>
                  <div className={styles.secondColumn}>
                    <p>
                      Whether you are planning a state-of-the art deep-sea longline vessel or want
                      to equip a small coastal boat for automatic longline fishing, contact
                      Fiskevegn and we will help you through the whole process from planning to
                      successful fishing. As a customer of ours, you will be in good hands.
                    </p>
                  </div>
                </div>
              </InnerContainer>
            </VerticalRhythm>
          </BlockDesign>
        </Block>
        <Block>
          <InnerContainer>
            <Intro title="Video"></Intro>
            <p>Video</p>
          </InnerContainer>
        </Block>
        <Block>
          <InnerContainer>
            <Intro title="Images"></Intro>
            <p>Other images</p>
          </InnerContainer>
        </Block>
      </Container>
    </Layout>
  );
};

export default ProductTemplate;
