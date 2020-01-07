import React from "react";
import { graphql } from "gatsby";

import GraphQLErrorList from "../components/graphql-error-list";
import Container from "../components/container";
import Layout from "../containers/layout";
import VerticalFlow from "../components/vertical-flow";
import Block from "../components/block";
import BlockIntro from "../components/block-intro";
import List from "../components/list";
import Card from "../components/card";
import SEO from "../components/seo";

import utils from "../components/utils.module.css";
import pages from "../components/pages.module.css";

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
    <Layout pageClass={pages.products} currentPage="products">
      <SEO title="Fiskevegn products" />
      <Container>
        <VerticalFlow>
          <BlockIntro
            name="Our products"
            title="Modern fishing solutions"
            text="Since its inception, Fiskevegn has been founded on the core values of quality,
            delivery and innovation. We emphasize close communication with our customers and rapid
            responses to deliver better products, solutions and services. Our core values have
            yielded results both for our customers and for us. We are proud to be one of the most
            trusted names in the global arena of longline fishing."
          />
        </VerticalFlow>

        <VerticalFlow>
          <Block type="fullWidth" backgroundImage="/bering-sea.jpg">
            <List type="twoandtwo" gap="no">
              <Card
                title="Fishery"
                description="sustainable solutions
                towards safer, cleaner oceans. sustainable solutions
                towards safer, cleaner oceans. both for our customers"
                isLink={true}
                linkSrc="fishery"
                hasImage={true}
                imgSrc="/fishery.jpg"
              />

              <Card
                title="Aquaculture"
                description="sustainable solutions
                towards safer, cleaner oceans."
                isLink={true}
                linkSrc="aquaculture"
                hasImage={true}
                imgSrc="/rope-2.jpg"
              />

              <Card
                title="Rope solutions"
                description="sustainable solutions
                towards safer, cleaner oceans."
                isLink={true}
                linkSrc=""
                hasImage={true}
                imgSrc="/rope-2.jpg"
              />

              <Card
                title="General supplies"
                description="sustainable solutions
                towards safer, cleaner oceans."
                isLink={true}
                linkSrc=""
                hasImage={true}
                imgSrc="/fishery.jpg"
              />
            </List>
          </Block>
        </VerticalFlow>
      </Container>
    </Layout>
  );
};

export default Products;
