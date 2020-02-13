import React from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";

import Layout from "../containers/layout";
import Container from "../components/container";
import Block from "../components/block";
import BlockDesign from "../components/block-design";
import InnerContainer from "../components/inner-container";
import Hero from "../components/hero";
import Promoted from "../components/promoted";
import List from "../components/list";
import Intro from "../components/intro";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";

import { uiNewsTitle } from "../lib/ui";

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    frontpage: sanityFrontpage {
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
        intro {
          name
          title
          text
        }
        title
        text
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
        intro {
          name
          title
          text
        }
        title
        text
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
  const { data, errors } = props;
  console.log("log index.js data", data);
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const frontpage = (data || {}).frontpage;

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

  if (!frontpage) {
    throw new Error(
      'Missing "Frontpage". Open the studio at http://localhost:3333 and add some content to "Frontpage" and restart the development server.'
    );
  }

  const lang = "en";

  return (
    <Layout isCustomHeader={true}>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      {frontpage.topImage && <Hero image={frontpage.topImage} />}
      <Container>
        <h1 hidden>{site.title}</h1>
        {frontpage.firstPromotedBlock && (
          <Block>
            <InnerContainer>
              <Promoted {...frontpage.firstPromotedBlock} reverseFlow />
            </InnerContainer>
          </Block>
        )}
        {frontpage.secondPromotedBlock && (
          <Block name="serviceTeaser" verticalRhythm={{ bottom: 0 }}>
            <BlockDesign
              svg={{
                wave: true,
                number: "1"
              }}
            >
              <InnerContainer>
                <Promoted {...frontpage.secondPromotedBlock} />
              </InnerContainer>
            </BlockDesign>
          </Block>
        )}

        {newsNodes && (
          <Block>
            <InnerContainer>
              <Intro title={`${uiNewsTitle[lang]}`} />
              <List
                nodes={newsNodes}
                browseMoreText="More news"
                browseMoreHref="/archive/"
                isNews
              />
            </InnerContainer>
          </Block>
        )}
      </Container>
    </Layout>
  );
};

export default IndexPage;
