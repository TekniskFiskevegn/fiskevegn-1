import React from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";
import FrontpageImage from "../components/frontpage-image";
import PromotedBlock from "../components/promoted-block";
import BlockDesign from "../components/block-full-width";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import NewsBlock from "../components/news-block";
import List from "../components/list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import utils from "../components/utils.module.css";
import Block from "../components/block";
import InnerContainer from "../components/inner-container";

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    frontpage: sanityFrontpage {
      _id
      fullWidthBlock {
        title
        description
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
      promotedBlock {
        title
        description
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
      frontpageImage {
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
    }
    projects: allSanityProject(
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
  console.log("log index.js - data", data);
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const frontpage = (data || {}).frontpage;
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];
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

  return (
    <Layout isCustomHeader={true}>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <FrontpageImage {...frontpage} />
      <Container>
        <h1 hidden>{site.title}</h1>
        {frontpage.promotedBlock && (
          <Block name="products">
            <InnerContainer>
              <PromotedBlock {...frontpage} />
            </InnerContainer>
          </Block>
        )}

        {frontpage.fullWidthBlock && (
          <Block name="services">
            <BlockDesign svgDesign={true} designType="wave" designSelection="1">
              <InnerContainer>
                <PromotedBlock demoImage={true} lightTheme={true} {...frontpage} />
              </InnerContainer>
            </BlockDesign>
          </Block>
        )}
        {newsNodes && (
          <Block name="news">
            <InnerContainer>
              <NewsBlock title="Latest news" nodes={newsNodes} browseMoreHref="/archive/" />
            </InnerContainer>
          </Block>
        )}
      </Container>
    </Layout>
  );
};

export default IndexPage;
