import React from "react";
import { graphql } from "gatsby";

import Container from "../components/container";
import Layout from "../containers/layout";

import GraphQLErrorList from "../components/graphql-error-list";
import HorizontalList from "../components/horizontal-list";
import List from "../components/list";
import Card from "../components/card";
import SEO from "../components/seo";
import FullWidthBlock from "../components/full-width-block-final";
import PageIntro from "../components/page-intro";

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
    <Layout pageClass={pages.products}>
      <SEO title="Fiskevegn products" />
      <Container>
        <div className={utils.verticalFlow}>
          <PageIntro
            tinyTitle="Our services"
            title="Excellent service and rewarding collaborations"
            text="In all Fiskevegn's activity sectors, industry know-how, on-the-fly problem-solving
              skills and a high level of service is essential. We strive to provide excellent
              service and rewarding collaborations for our customers, suppliers and many research-
              and industry partners."
          />
        </div>
        <div className={utils.verticalFlow}>
          <FullWidthBlock>
            <List type="category">
              <Card
                title="Fishery"
                description="sustainable solutions
                towards safer, cleaner oceans."
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
          </FullWidthBlock>
        </div>
      </Container>
    </Layout>
  );
};

export default Services;
