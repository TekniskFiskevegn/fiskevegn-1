import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";
import Layout from "../containers/layout";
import Container from "../components/container";
import InnerContainer from "../components/inner-container";
import Hero from "../components/hero";
import Block from "../components/block";
import ContactBlock from "../components/contact-block";
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

const ProductCategory = props => {
  return (
    <Layout pageClass="" currentPage="contact" isCustomHeader={true}>
      <SEO title="Fiskevegn Fishery" />
      <Hero demoSrc="/contact.jpg" demo />
      <Container>
        <Block>
          <InnerContainer>
            <ContactBlock
              image="/scenery-1.jpg"
              title="Flatraket, Norway"
              tinyTitle="Headquarter"
              description="Our headquarter is located at beautiful Flatraket"
              textTitle="Contact"
            />
          </InnerContainer>
        </Block>
        <Block>
          <InnerContainer>
            <ContactBlock
              image="/aalesund.jpg"
              title="Ålesund"
              tinyTitle="Department"
              description="Our department in Ålesund, Norway"
              textTitle="Contact"
            />
          </InnerContainer>
        </Block>
      </Container>
    </Layout>
  );
};

export default ProductCategory;
