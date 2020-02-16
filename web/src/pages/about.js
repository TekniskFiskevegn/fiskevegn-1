import React from "react";
import { graphql } from "gatsby";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs, cn } from "../lib/helpers";

import Block from "../components/block";
import BlockDesign from "../components/block-design";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import InnerContainer from "../components/inner-container";
import Intro from "../components/intro";
import Layout from "../containers/layout";
import List from "../components/list";
import SEO from "../components/seo";

// styles
import { responsiveTitle1 } from "../components/typography.module.css";
import { defaultLink } from "../components/utils.module.css";
import borrowed from "../components/presentation.module.css";

// static data
import { demoText, demoPartners, demoFeatures } from "../lib/dummy";

const AboutPage = props => {
  const partnerNodes = demoPartners;
  const featureNodes = demoFeatures;
  // const partners = nodes.map(node => (
  //   <Item {...node} key={node.id || 1} style={{ attention: true, opacity: true }} />
  // ));

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
      <SEO title="AS Fiskevegn, the company and the history" />
      <Container>
        <Block>
          <InnerContainer>
            <Intro {...blockIntro} />
          </InnerContainer>
        </Block>

        <Block verticalRhythm={{ bottom: 0 }}>
          <BlockDesign bgImage="/sceneries/scenery-4.jpg" opacityClass="065" flex>
            <InnerContainer>
              <List nodes={demoFeatures} listItemStyle="feature" />
            </InnerContainer>
          </BlockDesign>
        </Block>

        <Block verticalRhythm={{ top: 0, bottom: 1 }}>
          <BlockDesign light gradient>
            <InnerContainer>
              <Intro {...blockIntro2} margin />
              <List nodes={partnerNodes} style="" listItemStyle="pop" />
            </InnerContainer>
          </BlockDesign>
        </Block>

        <Block>
          <InnerContainer>
            <div className={cn(borrowed.root)}>
              <div className={borrowed.first}>
                <div>
                  <h2 className={responsiveTitle1}>Career at Fiskevegn</h2>
                  <p className={borrowed.pMargin}>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                  <a href="" className={defaultLink}>
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
      </Container>
    </Layout>
  );
};

export default AboutPage;
