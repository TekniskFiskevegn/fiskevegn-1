import React from "react";
import { graphql, Link } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";
import { getLocale } from "../../sytalaust";

import Block from "../components/block";
import Container from "../components/container";
import Design from "../components/design";
import GraphQLErrorList from "../components/graphql-error-list";
import Hero from "../components/hero";
import InnerContainer from "../components/inner-container";
import Intro from "../components/intro";
import Layout from "../containers/layout";
import List from "../components/list";
import localize from "../components/localize";
import Promoted from "../components/promoted";
import SEO from "../components/seo";

import utils from "../components/utils.module.css";

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    page: sanityPageHome(_id: { regex: "/(drafts.|)pageHome/" }) {
      _id
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
      promotedBlocks {
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
        browseMoreHref
        browseMoreText {
          _type
          en
          no
        }
      }
    }
    news: allSanityTemplateNews(sort: { fields: [publishedAt], order: ASC }) {
      edges {
        node {
          id
          title {
            _type
            en
            no
          }
          _rawExcerpt
          slug {
            _type
            en {
              current
            }
            no {
              current
            }
          }
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
      }
    }
  }
`;

const IndexPage = props => {
  const { data, pageContext, location, errors } = props;
  const locale = getLocale(pageContext);

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const page = (data || {}).page;

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio and add some content to site settings.'
    );
  }

  if (!page) {
    throw new Error('Missing "Frontpage". Open the studio and add some content to the homepage.');
  }

  const { heroImage, promotedBlocks } = page;

  const newsNodes = (data || {}).news
    ? mapEdgesToNodes(data.news).filter(filterOutDocsPublishedInTheFuture)
    : [];

  return (
    <Layout locale={locale} location={location} info={props} isCustomHeader={true}>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      {heroImage && <Hero image={heroImage} />}
      <Container>
        <h1 hidden>{site.title}</h1>
        {promotedBlocks.map((block, i) => {
          if (Math.abs(i % 2) != 1) {
            return (
              <Block key={i}>
                <InnerContainer>
                  <Promoted {...block} reverseFlow />
                </InnerContainer>
              </Block>
            );
          } else {
            return (
              <Block key={i} verticalRhythm={{ bottom: 0 }}>
                <Design
                  svg={{
                    wave: true,
                    number: "1"
                  }}
                >
                  <InnerContainer>
                    <Promoted {...block} lightBackground />
                  </InnerContainer>
                </Design>
              </Block>
            );
          }
        })}

        {newsNodes && (
          <Block>
            <InnerContainer>
              <Intro title={locale == "en" ? "Latest News" : "Siste nytt"} textAlignLeft />
              <List style="oneHalfWithGapAndGridFix" listItem="NewsTeaser" nodes={newsNodes} />
              <div>
                <Link to="/archive" className={utils.defaultLink}>
                  {locale == "en" ? "More news" : "Flere nyheter"}
                </Link>
              </div>
            </InnerContainer>
          </Block>
        )}
      </Container>
    </Layout>
  );
};

export default localize(IndexPage);
