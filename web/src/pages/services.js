import React from "react";
import { graphql } from "gatsby";

import Container from "../components/container";
import Layout from "../containers/layout";

import GraphQLErrorList from "../components/graphql-error-list";
import FullWidthBlock from "../components/full-width-block";
import BlockIntro from "../components/block-intro";
import List from "../components/list";
import Card from "../components/card";
import SEO from "../components/seo";

import utils from "../components/utils.module.css";
import pages from "../components/pages.module.css";
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

const Services = props => {
  return (
    <Layout pageClass={pages.products} currentPage="services">
      <SEO title="Fiskevegn products" />
      <Container>
        <div className={utils.verticalFlow}>
          <BlockIntro
            tinyTitle="Our services"
            title="Excellent service and rewarding collaborations"
            text="In all Fiskevegn's activity sectors, industry know-how, on-the-fly problem-solving
              skills and a high level of service is essential. We strive to provide excellent
              service and rewarding collaborations for our customers, suppliers and many research-
              and industry partners."
          />
        </div>
        <div className={utils.verticalFlow}>
          <FullWidthBlock
            svgDesign={true}
            designType="wave"
            designSelection="3"
            designPosition="top"
            lessPaddingTop={true}
          >
            <List type="twoandtwo" gap="small">
              <Card
                title="Fishery Development"
                description="sustainable solutions
                towards safer, cleaner oceans. sustainable solutions"
                isLink={true}
                linkSrc="fishery"
                hasImage={true}
                imgSrc="/rope-2.jpg"
              />

              <Card
                title="Project Planning"
                description="sustainable solutions
                towards safer, cleaner oceans."
                isLink={true}
                linkSrc="aquaculture"
                hasImage={true}
                imgSrc="/rope-2.jpg"
              />

              <Card
                title="Bespoke Engineering"
                description="sustainable solutions
                towards safer, cleaner oceans."
                isLink={true}
                linkSrc=""
                hasImage={true}
                imgSrc="/rope-2.jpg"
              />

              <Card
                title="Mooring Analysis"
                description="sustainable solutions
                towards safer, cleaner oceans."
                isLink={true}
                linkSrc=""
                hasImage={true}
                imgSrc="/rope-2.jpg"
              />
            </List>
          </FullWidthBlock>
        </div>
      </Container>
    </Layout>
  );
};

export default Services;
