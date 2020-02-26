import React from "react";
import { graphql } from "gatsby";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs, cn } from "../lib/helpers";
import { getLocale } from "../../sytalaust";

import Block from "../components/block";
import Design from "../components/design";
import Container from "../components/container";
import Feature from "../components/feature";
import GraphQLErrorList from "../components/graphql-error-list";
import InnerContainer from "../components/inner-container";
import Intro from "../components/intro";
import Layout from "../containers/layout";
import localize from "../components/localize";
import Presentation from "../components/presentation";
import StandardContent from "../components/standard-content";
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
      partners1 {
        title
        complementaryTitle
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
      }
    }
  }
`;

const AboutPage = props => {
  const { pageContext, data, errors } = props;
  const locale = getLocale(pageContext);
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }
  const page = (data || {}).page;

  if (!page) {
    throw new Error('Missing "page". Open the studio and add some content to this page.');
  }

  const features = page.features;

  return (
    <Layout locale={locale} {...props}>
      <SEO title={locale == "en" ? "About" : "Om oss"} />
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
                  {features.map((item, i) => (
                    <li key={i}>
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
            <StandardContent {...page.partners} withBorders />
          </InnerContainer>
        </Block>
      </Container>
    </Layout>
  );
};

export default localize(AboutPage);
