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
import Item from "../components/item";
import { demoText } from "../lib/demo-content";

import utils from "../components/utils.module.css";
import borrowed from "../components/product-pres.module.css";

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
    text: `${demoText(2)}`
  };

  const blockIntro3 = {
    name: "",
    title: "Career at AS Fiskevegn",
    text: `${demoText(3)}`
  };
  return (
    <Layout currentPage="about">
      <SEO title="About Fiskevegn" />
      <Container>
        <Block name="Company introduction" blockOrder="1">
          <InnerContainer>
            <Intro {...blockIntro} />
          </InnerContainer>
        </Block>

        <Block>
          <BlockDesign bgImage="/sceneries/scenery-4.jpg" opacityClass="050" flex>
            <InnerContainer>
              <List type="justifiedCenter">
                <Feature text="New Zealand" description="Antarctic fishery" />
                <Feature text="USA" description="Serving the Alaskan market" />
                <Feature text="Russia" description="Longlines & hooks to our neighbour" />
              </List>
            </InnerContainer>
          </BlockDesign>
        </Block>

        <Block name="Partners">
          {/* <BlockDesign
            // svg={{
            //   wave: true,
            //   number: "10",
            //   positionTop: true
            // }}
          > */}
          <InnerContainer>
            <Intro {...blockIntro2} margin />
            <List smallGap>
              {/* <Card
                title="MMG"
                text="Måløy Maritime Group"
                linkSrc="https://www.maloymaritime.no/"
                styling={{ borderRadius: true, flat: false, gray: true }}
                externalLink
              />
              <Card
                title="Colto"
                text="Coalition of Legal Toothfish Operators"
                linkSrc="https://www.colto.org/"
                styling={{ borderRadius: true, flat: false, gray: true }}
                externalLink
              />
              <Card
                title="Eurocord"
                text="European organization for cordage manufacturers"
                linkSrc="https://www.eurocord.com/"
                styling={{ borderRadius: true, flat: false, gray: true }}
                externalLink
              />
              <Card
                title="GGGI"
                text="Global Ghost Gear Initiative"
                linkSrc="https://www.ghostgear.org/"
                styling={{ borderRadius: true, flat: false, gray: true }}
                externalLink
              /> */}
            </List>
          </InnerContainer>
          {/* </BlockDesign> */}
        </Block>

        <Block name="Partners">
          <InnerContainer>
            <div className={cn(borrowed.root)}>
              <div className={borrowed.first}>
                <div>
                  <h2 className={borrowed.titleSubtle}>Career at Fiskevegn</h2>
                  <p className={borrowed.pMargin}>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                  <a href="" className={utils.defaultLink}>
                    career@fiskevegn.no
                  </a>
                </div>
              </div>
              <div className={borrowed.second}>
                <img src="/scenery-small.jpg" alt="" />
              </div>
            </div>
          </InnerContainer>
        </Block>

        {/* <Block name="Partners">
          <InnerContainer>
            <div className={cn(borrowed.root, borrowed.reverse)}>
              <div className={borrowed.first}>
                <div>
                  <h2 className={borrowed.titleSubtle}>Partners</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
              </div>
              <div className={borrowed.second}>
                <div className={utils.boxShadow}>
                  <List type="fiftyfifty" noGap>
                    <Card
                      title="MMG"
                      text="Måløy Maritime Group"
                      linkSrc="https://www.maloymaritime.no/"
                      styling={{ borderRadius: true, flat: false }}
                      externalLink
                    />
                    <Card
                      title="Colto"
                      text="Coalition of Legal Toothfish Operators"
                      linkSrc="https://www.colto.org/"
                      styling={{ borderRadius: true, flat: false }}
                      externalLink
                    />
                    <Card
                      title="Eurocord"
                      text="European organization for cordage manufacturers"
                      linkSrc="https://www.eurocord.com/"
                      styling={{ borderRadius: true, flat: false }}
                      externalLink
                    />
                    <Card
                      title="GGGI"
                      text="Global Ghost Gear Initiative"
                      linkSrc="https://www.ghostgear.org/"
                      styling={{ borderRadius: true, flat: false }}
                      externalLink
                    />
                  </List>
                </div>
              </div>
            </div>
          </InnerContainer>
        </Block> */}
      </Container>
    </Layout>
  );
};

export default About;
