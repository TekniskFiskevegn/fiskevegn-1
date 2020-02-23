import React from "react";
import { graphql } from "gatsby";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs, cn } from "../lib/helpers";

import Block from "../components/block";
import Design from "../components/design";
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
        listOfImages {
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
          caption
          imageHref
        }
        email
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
          <Design backgroundImage={page.sceneryImage} opacity="075" flex>
            <InnerContainer>
              {features && features.length > 0 && (
                <ul className={cn(listStyles.default)}>
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
          <InnerContainer>
            <Presentation {...page.partners} reverseFlow />
          </InnerContainer>
        </Block>
      </Container>
    </Layout>
  );
};

export default AboutPage;
