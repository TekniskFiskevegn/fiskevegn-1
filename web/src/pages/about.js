import React from "react";
import { graphql } from "gatsby";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs, cn } from "../lib/helpers";

import Block from "../components/block";
import Design from "../components/block-design";
import Container from "../components/container";
import Feature from "../components/feature";
import GraphQLErrorList from "../components/graphql-error-list";
import InnerContainer from "../components/inner-container";
import Intro from "../components/intro";
import Layout from "../containers/layout";
import Presentation from "../components/presentation";
import SEO from "../components/seo";

// styles
import listStyles from "../components/list.module.css";
import { responsiveTitle1 } from "../components/typography.module.css";
import { defaultLink } from "../components/utils.module.css";
import borrowed from "../components/presentation.module.css";

// static data
import { demoText, demoPartners, demoFeatures } from "../lib/dummy";

export const query = graphql`
  query AboutPageQuery {
    page: sanityPageAbout {
      _id
      title
      complementaryTitle
      text
      sceneryImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }
      features {
        title
        text
      }
      career {
        title
        text
        image {
          crop {
            _key
            _type
            top
            bottom
            left
            right
          }
          hotspot {
            _key
            _type
            x
            y
            height
            width
          }
          asset {
            _id
          }
          alt
        }
        email
      }
      partners {
        title
        text
        partnerList {
          name
          logo {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
            alt
          }
        }
      }
    }
  }
`;

const AboutPage = props => {
  const { data, errors } = props;
  console.log("log 'about page' data", data);
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const page = (data || {}).page;

  // static nodes
  // const nodes = staticProductCategories;

  if (!page) {
    throw new Error('Missing "page". Open the studio and add some content to this page.');
  }
  const features = page.features;

  return (
    <Layout currentPage="about">
      <SEO title="About AS Fiskevegn" />
      <Container>
        <Block>
          <InnerContainer>
            <Intro
              complementaryTitle={page.complementaryTitle}
              title={page.title}
              text={page.text}
            />
          </InnerContainer>
        </Block>

        <Block>
          <Design backgroundImage={page.sceneryImage} opacityClass="075" flex>
            <InnerContainer>
              {features && features.length > 0 && (
                <ul className={cn(listStyles.ul)}>
                  {features.map(item => (
                    <li key={item.id}>
                      <Feature {...item} />
                    </li>
                  ))}
                </ul>
              )}
            </InnerContainer>
          </Design>
        </Block>

        <Block>
          <InnerContainer>
            <Presentation {...page.career} />
          </InnerContainer>
        </Block>

        <Block>
          <Design>
            <InnerContainer>
              <Presentation {...page.partners} reverseFlow />
            </InnerContainer>
          </Design>
        </Block>
      </Container>
    </Layout>
  );
};

export default AboutPage;
