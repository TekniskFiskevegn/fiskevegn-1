import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import NewsPreviewGrid from "../components/news-block";
import KeyNumber from "../components/key-number";
import FullWidthBlock from "../components/full-width-block";
import HorizontalList from "../components/horizontal-list";
import List from "../components/list";
import Card from "../components/card";
import BlockIntro from "../components/block-intro";
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
          <BlockIntro
            tinyTitle="The company"
            title="Quality, delivery and innovation"
            text="Since its inception, Fiskevegn has been founded on the core values of quality,
              delivery and innovation. We emphasize close communication with our customers and rapid
              responses to deliver better products, solutions and services. Our core values have
              yielded results both for our customers and for us. We are proud to be one of the most
              trusted names in the global arena of longline fishing."
          />
          <List type="wrapping">
            <KeyNumber number={1876} description="Fishing hooks delivered" />
            <KeyNumber number={29} description="Partners worldwide" />
          </List>
        </div>
        <div className={utils.verticalFlow}>
          <FullWidthBlock svgShape={true} svgType="wave" svgSelection="2" svgPosition="bottom">
            <BlockIntro
              tinyTitle=""
              title="Partners and Collaborations"
              text="Fiskevegn is working together with mulitple industry operators, goverments and NGO's
              to eliminate IUU fishing and to drive for economically viable, sustainable solutions
              towards safer, cleaner oceans. We are also a member of several industry associations
              to keep current with new developments in manufacturing technology."
            />
            <List>
              <Card
                title="Colto"
                description="sustainable solutions towards safer, cleaner oceans."
              />
              <Card
                title="Eurocord"
                description="sustainable solutions
              towards safer, cleaner oceans."
              />
              <Card
                title="Global Ghost Gear Initiative"
                description="sustainable solutions
              towards safer, cleaner oceans."
              />
            </List>
          </FullWidthBlock>
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
        </div>
      </Container>
    </Layout>
  );
};

export default About;
