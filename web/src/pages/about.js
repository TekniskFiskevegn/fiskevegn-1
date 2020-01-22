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
import { demoText, demoPartners, demoFeatures } from "../lib/demo-content";

import { responsiveTitle2, defaultLink } from "../components/utils.module.css";
import borrowed from "../components/product-pres.module.css";

import GraphQLErrorList from "../components/graphql-error-list";
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

const About = props => {
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
      <SEO title="About Fiskevegn" />
      <Container>
        <Block name="Company introduction" blockOrder="1">
          <InnerContainer>
            <Intro {...blockIntro} />
          </InnerContainer>
        </Block>

        <Block verticalRhythm={{ bottom: 0 }}>
          <BlockDesign bgImage="/sceneries/scenery-4.jpg" opacityClass="050" flex>
            <InnerContainer>
              <List nodes={demoFeatures} listItemStyle="feature"></List>
            </InnerContainer>
          </BlockDesign>
        </Block>

        <Block verticalRhythm={{ top: 0, bottom: 1 }}>
          <BlockDesign light gradient>
            <InnerContainer>
              <Intro {...blockIntro2} margin />
              <List nodes={partnerNodes} style="" listItemStyle="pop">
                {/* <a href="https://www.maloymaritime.no/" className={utils.card}>
                  <div className={utils.cardImage}>
                    <img src="/logos/mmg.png" alt="" />
                  </div>
                  <div className={utils.cardInfo}>
                    <span>Måløy Maritime Group</span>
                  </div>
                </a>
                <a href="https://www.colto.org/" className={utils.card}>
                  <div className={utils.cardImage}>
                    <img src="/logos/colto.png" alt="" />
                  </div>
                  <div className={utils.cardInfo}>
                    <span>Coalition of Legal Toothfish Operators</span>
                  </div>
                </a>
                <a href="https://www.eurocord.com/" className={utils.card}>
                  <div className={utils.cardImage}>
                    <img src="/logos/eurocord.png" alt="" />
                  </div>
                  <div className={utils.cardInfo}>
                    <span>European organization for cordage manufacturers</span>
                  </div>
                </a>
                <a href="https://www.ghostgear.org/" className={utils.card}>
                  <div className={utils.cardImage}>
                    <img src="/logos/gggi.jpg" alt="" />
                  </div>
                  <div className={utils.cardInfo}>
                    <span>Global Ghost Gear Initiative</span>
                  </div>
                </a> */}
              </List>
            </InnerContainer>
          </BlockDesign>
        </Block>

        <Block>
          <InnerContainer>
            <div className={cn(borrowed.root)}>
              <div className={borrowed.first}>
                <div>
                  <h2 className={responsiveTitle2}>Career at Fiskevegn</h2>
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

export default About;
