import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import NewsPreviewGrid from "../components/news-preview-grid";
import KeyNumber from "../components/key-number";
import FullWidthBlock2 from "../components/full-width-block-2";
import HorizontalList from "../components/horizontal-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs, cn } from "../lib/helpers";

import utils from "../components/utils.module.css";
import { responsiveTitle1 } from "../components/typography.module.css";

export const query = graphql`
  query AboutQuery {
    about: allSanityProject(
      limit: 12
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          mainImage {
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const About = props => {
  return (
    <Layout>
      <SEO title="About Fiskevegn" />
      <Container>
        <div className={utils.verticalFlow}>
          <div className={utils.centeredTextLargeScreen}>
            <h2 className={responsiveTitle1}>QUALITY, DELIVERY AND INNOVATION</h2>
            <p>
              Since its inception, Fiskevegn has been founded on the core values of quality,
              delivery and innovation. We emphasize close communication with our customers and rapid
              responses to deliver better products, solutions and services. Our core values have
              yielded results both for our customers and for us. We are proud to be one of the most
              trusted names in the global arena of longline fishing.
            </p>
          </div>
          <HorizontalList>
            <KeyNumber number={1876} description="Fishing hooks delivered" />
            <KeyNumber number={29} description="Partners worldwide" />
          </HorizontalList>
        </div>
        <div className={utils.verticalFlow}>
          <FullWidthBlock2 />
        </div>
        <div className={utils.verticalFlow}>
          <div className={utils.centeredTextLargeScreen}>
            <h2 className={responsiveTitle1}>Core Values</h2>
            <p>
              Since its inception, Fiskevegn has been founded on the core values of quality,
              delivery and innovation. We emphasize close communication with our customers and rapid
              responses to deliver better products.
            </p>
          </div>
          <HorizontalList></HorizontalList>
        </div>
      </Container>
    </Layout>
  );
};

export default About;
