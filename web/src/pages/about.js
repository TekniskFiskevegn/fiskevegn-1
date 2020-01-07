import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import PunchLine from "../components/punch-line";
import List from "../components/list";
import Card from "../components/card";
import Block from "../components/block";
import VerticalFlow from "../components/vertical-flow";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { demoText } from "../lib/demoContent";
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
    <Layout currentPage="about">
      <SEO title="About Fiskevegn" />
      <Container>
        <VerticalFlow>
          <Block
            type="default"
            name="Company introduction"
            blockOrder="1"
            intro={{
              name: "The company",
              title: "Quality, delivery and innovation",
              text: `${demoText(1)}`
            }}
          >
            <VerticalFlow customValues={{ top: 3, bottom: 0 }}>
              <List type="justifiedSpaceAround">
                <PunchLine text="New Zealand" description="Antarctic fishery" />
                <PunchLine text="Usa" description="Equipment" />
                <PunchLine text="Greenland" description="Arctic fishery" />
              </List>
            </VerticalFlow>
          </Block>
        </VerticalFlow>
        <VerticalFlow>
          <Block
            type="fullWidth"
            name="Partners"
            blockOrder="2"
            intro={{
              name: "",
              title: "Partners and Collaborations",
              text: `${demoText(2)}`,
              marginBottom: true
            }}
            svg={{
              type: "wave",
              selection: "1",
              position: "bottom"
            }}
          >
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
          </Block>
        </VerticalFlow>
        <VerticalFlow>
          <Block
            type="default"
            name="Values"
            blockOrder="3"
            intro={{ title: "Core Values", text: `${demoText(1)}` }}
          ></Block>
        </VerticalFlow>
      </Container>
    </Layout>
  );
};

export default About;
