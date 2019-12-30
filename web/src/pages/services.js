import React from "react";
import { graphql } from "gatsby";

import Container from "../components/container";
import Layout from "../containers/layout";

import GraphQLErrorList from "../components/graphql-error-list";
import HorizontalList from "../components/horizontal-list";
import List from "../components/list";
import Card from "../components/card";
import SEO from "../components/seo";
import FullWidthBlock3 from "../components/full-width-block-3";

import utils from "../components/utils.module.css";
import pages from "../components/pages.module.css";
import { responsiveTitle1 } from "../components/typography.module.css";

import { mapEdgesToNodes, filterOutDocsWithoutSlugs, cn } from "../lib/helpers";
import FullWidthBlock from "../components/full-width-block-2";

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

const Services = props => {
  return (
    <Layout pageClass={pages.products}>
      <SEO title="Fiskevegn products" />
      <Container>
        <div className={utils.verticalFlow}>
          <div className={utils.centeredTextLargeScreen}>
            <span className={utils.tinyTitle}>Our services</span>
            <h2 className={responsiveTitle1}>Excellent service and rewarding collaborations</h2>
            <p>
              In all Fiskevegn's activity sectors, industry know-how, on-the-fly problem-solving
              skills and a high level of service is essential. We strive to provide excellent
              service and rewarding collaborations for our customers, suppliers and many research-
              and industry partners.
            </p>
          </div>
          <FullWidthBlock3 />
        </div>
      </Container>
    </Layout>
  );
};

export default Services;
