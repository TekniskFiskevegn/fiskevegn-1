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
              image="/office.jpg"
              title="Norway"
              tinyTitle="Main Office"
              description="Our main office is located at beautiful Flatraket."
              textTitle="Main Office"
            />
          </InnerContainer>
        </Block>
        <Block>
          <InnerContainer>
            <ContactBlock
              image="/aalesund.jpg"
              title="Ålesund"
              tinyTitle="Department"
              description="Our department in Ålesund, Norway, is responsible for Equipment"
              textTitle="Ålesund"
            />
          </InnerContainer>
        </Block>
        <Block>
          <InnerContainer>
            <ContactBlock
              image="/new-zealand.jpg"
              title="New Zealand"
              tinyTitle="Department"
              description="Our department in New Zealand is responsible for fishery in antarctica"
              textTitle="New Zealand"
            />
          </InnerContainer>
        </Block>
      </Container>
    </Layout>
  );
};

export default ProductCategory;
