import React from "react";
import { graphql } from "gatsby";

import Container from "../components/container";
import Layout from "../containers/layout";

import GraphQLErrorList from "../components/graphql-error-list";
import HorizontalList from "../components/horizontal-list";
import Card from "../components/card";
import SEO from "../components/seo";

import utils from "../components/utils.module.css";
import { responsiveTitle1 } from "../components/typography.module.css";

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
    <Layout>
      <SEO title="Fiskevegn products" />
      <Container>
        <div className={utils.verticalFlow}>
          <div className={utils.centeredTextLargeScreen}>
            <span className={utils.tinyTitle}>Our products</span>
            <h2 className={responsiveTitle1}>MODERN FISHING SOLUTIONS</h2>
            <p>
              Since its inception, Fiskevegn has been founded on the core values of quality,
              delivery and innovation. We emphasize close communication with our customers and rapid
              responses to deliver better products, solutions and services. Our core values have
              yielded results both for our customers and for us. We are proud to be one of the most
              trusted names in the global arena of longline fishing.
            </p>
          </div>
          <div className={utils.flexWrap}>
            <div className={utils.flex50}>
              <Card
                title="Fishery"
                description="sustainable solutions
              towards safer, cleaner oceans."
                isLink={true}
                hasImage={true}
                imgSrc="/fishery.jpg"
              />
            </div>
            <div className={utils.flex50}>
              <Card
                title="Aquaculture"
                description="sustainable solutions
              towards safer, cleaner oceans."
                isLink={true}
                hasImage={true}
                imgSrc="/aquaculture.jpg"
              />
            </div>
            <div className={utils.flex50}>
              <Card
                title="Rope solutions"
                description="sustainable solutions
              towards safer, cleaner oceans."
                isLink={true}
                hasImage={true}
                imgSrc="/aquaculture.jpg"
              />
            </div>
            <div className={utils.flex50}>
              <Card
                title="General supplies"
                description="sustainable solutions
              towards safer, cleaner oceans."
                isLink={true}
                hasImage={true}
                imgSrc="/fishery.jpg"
              />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Products;
