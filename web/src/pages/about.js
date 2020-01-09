import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";
import Layout from "../containers/layout";
import Container from "../components/container";
import Block from "../components/block";
import BlockDesign from "../components/block-design";
import InnerContainer from "../components/inner-container";
import Intro from "../components/intro";
import Feature from "../components/feature";
import List from "../components/list";
import Card from "../components/card";
import { demoText } from "../lib/demoContent";

import GraphQLErrorList from "../components/graphql-error-list";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs, cn } from "../lib/helpers";

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
  const blockIntro = {
    name: "The company",
    title: "Quality, delivery and innovation",
    text: `${demoText(1)}`
  };
  return (
    <Layout currentPage="about">
      <SEO title="About Fiskevegn" />
      <Container>
        <Block name="Company introduction" blockOrder="1">
          <InnerContainer>
            <Intro {...blockIntro} margin />
            <List type="justifiedSpaceAround">
              <Feature text="New Zealand" description="Antarctic fishery" />
              <Feature text="Usa" description="Equipment" />
              <Feature text="Greenland" description="Arctic fishery" />
            </List>
          </InnerContainer>
        </Block>

        <Block name="services" verticalRhythm={{ bottom: 0 }}>
          <BlockDesign
            svg={{
              wave: true,
              number: "1"
            }}
          >
            <InnerContainer>
              <Intro {...blockIntro} margin />
              <List>
                <Card title="Colto" text="Sustainable solutions towards safer, cleaner oceans." />
                <Card
                  title="Eurocord"
                  text="Sustainable solutions
              towards safer, cleaner oceans."
                />
                <Card
                  title="Global Ghost Gear"
                  text="Sustainable solutions
              towards safer, cleaner oceans."
                />
              </List>
            </InnerContainer>
          </BlockDesign>
        </Block>

        <Block name="Values" blockOrder="3">
          <InnerContainer>
            <Intro {...blockIntro} />
          </InnerContainer>
        </Block>
      </Container>
    </Layout>
  );
};

export default About;
