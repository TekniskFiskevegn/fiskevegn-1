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

import utils from "../components/utils.module.css";

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
    name: "Made in norway",
    title: "Leading Longline Manufacturer",
    text: `${demoText(1)}`
  };

  const blockIntro2 = {
    name: "",
    title: "Partners and Collaborations",
    text: `${demoText(1)}`
  };

  const blockIntro3 = {
    name: "",
    title: "Career at AS Fiskevegn",
    text: `${demoText(1)}`
  };
  return (
    <Layout currentPage="about">
      <SEO title="About Fiskevegn" />
      <Container>
        <Block name="Company introduction" blockOrder="1">
          <InnerContainer>
            <Intro {...blockIntro} />
            {/* <List type="justifiedSpaceAround">
              <Feature text="New Zealand" description="Antarctic fishery" />
              <Feature text="Usa" description="Equipment" />
              <Feature text="Greenland" description="Arctic fishery" />
            </List> */}
          </InnerContainer>
        </Block>
        <Block>
          <BlockDesign bgImage="/map-2.jpg" opacityClass="085" flex>
            <InnerContainer>
              {/* <div className={utils.center}>
                <h3>Worldwide presence</h3>
              </div> */}
              <List type="justifiedCenter">
                <Feature text="New Zealand" description="Antarctic fishery" />
                <Feature text="USA" description="Serving the Alaskan market" />
                <Feature text="Russia" description="Longlines & hooks to our neighbour" />
              </List>
            </InnerContainer>
          </BlockDesign>
        </Block>
        <Block name="Values" blockOrder="3" verticalRhythm={{ top: 3, bottom: 3 }}>
          <InnerContainer>
            <Intro {...blockIntro3} />
          </InnerContainer>
        </Block>

        <Block name="Partners">
          <BlockDesign
            svg={{
              wave: true,
              number: "1"
            }}
          >
            <InnerContainer>
              <Intro {...blockIntro2} margin />
              <List smallGap>
                <Card
                  title="MMG"
                  text="Måløy Maritime Group"
                  linkSrc="https://www.maloymaritime.no/"
                  externalLink
                />
                <Card
                  title="Colto"
                  text="Coalition of Legal Toothfish Operators"
                  linkSrc="https://www.colto.org/"
                  externalLink
                />
                <Card
                  title="Eurocord"
                  text="European organization for cordage manufacturers"
                  linkSrc="https://www.eurocord.com/"
                  externalLink
                />
                <Card
                  title="GGGI"
                  text="Global Ghost Gear Initiative"
                  linkSrc="https://www.ghostgear.org/"
                  externalLink
                />
              </List>
            </InnerContainer>
          </BlockDesign>
        </Block>
      </Container>
    </Layout>
  );
};

export default About;
