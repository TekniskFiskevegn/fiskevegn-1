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

const AboutPage = props => {
  const { data, errors, pageContext } = props;
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

  const { intro, heroImage, features, career, partners } = page;
  const { name, title, complementaryTitle, text } = intro;

  return (
    <Layout locale={locale} {...props}>
      <SEO title={locale == "en" ? "About" : "Om oss"} />
      <Container>
        <Block>
          <InnerContainer>
            <Intro complementaryTitle={complementaryTitle} title={title} text={text} />
          </InnerContainer>
        </Block>

        <Block>
          <Design backgroundImage={heroImage} opacity="075" flex>
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
            <Presentation {...career} />
          </InnerContainer>
        </Block>

        <Block>
          <InnerContainer>
            <StandardContent {...partners} withBorders />
          </InnerContainer>
        </Block>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query AboutPageQuery {
    # Its neccessary to use this regex if page is hidden in deskStructure
    page: sanityPageAbout(_id: { regex: "/(drafts.|)pageAbout/" }) {
      intro {
        title {
          _type
          en
          no
        }
        complementaryTitle {
          _type
          en
          no
        }
        text {
          _type
          en
          no
        }
      }
      heroImage {
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
        title {
          _type
          en
          no
        }
        text {
          _type
          en
          no
        }
        attachedEmail
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
      }
      partners {
        title {
          _type
          en
          no
        }
        text {
          _type
          en
          no
        }
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
        }
      }
    }
  }
`;

export default localize(AboutPage);
