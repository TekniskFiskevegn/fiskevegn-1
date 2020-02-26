import React from "react";
import { graphql, Link } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";
import { getLocale } from "../../sytalaust";
import { uiNewsTitle, uiNewsReadMore } from "../lib/ui";

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
    page: sanityPageHome {
      _id
      topImage {
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
      }
      firstPromotedBlock {
        title
        complementaryTitle
        text
        secondaryTitle
        secondaryText
        browseMoreHref
        browseMoreText
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
      secondPromotedBlock {
        title
        complementaryTitle
        text
        secondaryTitle
        secondaryText
        browseMoreHref
        browseMoreText
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
    news: allSanityNews(
      limit: 2
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          mainImage {
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

const IndexPage = props => {
  const { data, errors, pageContext } = props;
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

  const newsNodes = (data || {}).news
    ? mapEdgesToNodes(data.news)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  if (!page) {
    throw new Error(
      'Missing "Frontpage". Open the studio at http://localhost:3333 and add some content to "Frontpage" and restart the development server.'
    );
  }

  return (
    <Layout locale={locale} {...props} isCustomHeader={true}>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      {page.topImage && <Hero image={page.topImage} />}
      <Container>
        <h1 hidden>{site.title}</h1>
        {page.firstPromotedBlock && (
          <Block>
            <InnerContainer>
              <Promoted {...page.firstPromotedBlock} reverseFlow />
            </InnerContainer>
          </Block>
        )}
        {page.secondPromotedBlock && (
          <Block verticalRhythm={{ bottom: 0 }}>
            <Design
              svg={{
                wave: true,
                number: "1"
              }}
            >
              <InnerContainer>
                <Promoted {...page.secondPromotedBlock} lightBackground />
              </InnerContainer>
            </Design>
          </Block>
        )}

        {newsNodes && (
          <Block>
            <InnerContainer>
              <Intro title={`${uiNewsTitle[locale]}`} />
              <List style="oneHalfWithGapAndGridFix" listItem="NewsTeaser" nodes={newsNodes} />
              <div>
                <Link to="/archive" className={utils.defaultLink}>
                  {uiNewsReadMore[locale]}
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
