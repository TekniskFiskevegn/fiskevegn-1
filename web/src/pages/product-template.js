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

import Presentation from "../components/presentation";

import utils from "../components/utils.module.css";

import GraphQLErrorList from "../components/graphql-error-list";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs, cn } from "../lib/helpers";
import Svg from "../components/svg";

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
  const pres1 = {
    title: "Automatic Baiter",
    text: "",
    image: "/product-images/baiter.png"
  };

  const pres2 = {
    title: "Hook Separator HS7000",
    text: "",
    image: "/product-images/hook-separator.png",
    reverseFlow: true
  };

  return (
    <Layout pageClass="" currentPage="products">
      <SEO title="Fiskevegn Fishery" />
      <Container>
        <Block>
          <InnerContainer borderBottom>
            <Intro
              backButton
              backTo="/product-category"
              name="Product"
              title="Automatic longline systems"
              text="Since its inception, Fiskevegn has been founded on the core values of quality,
            delivery and innovation. We emphasize close communication with our customers and rapid
            responses to deliver better Fishery, solutions and services. Our core values have
            yielded results both for our customers."
            />
          </InnerContainer>
        </Block>
        <Block>
          <InnerContainer>
            <Presentation {...pres1} />
          </InnerContainer>
        </Block>
        <Block>
          <InnerContainer>
            <Presentation {...pres2} />
          </InnerContainer>
        </Block>
      </Container>
    </Layout>
  );
};

export default ProductTemplate;
