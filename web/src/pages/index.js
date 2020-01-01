import React from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";
import FrontpageImage from "../components/frontpage-image";
import PromotedBlock from "../components/promoted-block";
import FullWidthBlock from "../components/full-width-block";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import NewsBlock from "../components/news-block";
import List from "../components/list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import utils from "../components/utils.module.css";

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
          <div className={utils.verticalFlow}>
            <PromotedBlock {...frontpage} />
          </div>
        )}
        {frontpage.fullWidthBlock && (
          <div className={utils.verticalFlow}>
            {/* <FullWidthBlock {...frontpage} /> */}
            <FullWidthBlock isShaped={true} shapeType="wave" shapeNumber="1">
              <PromotedBlock lightTheme={true} {...frontpage} />
            </FullWidthBlock>
          </div>
        )}
        {newsNodes && (
          <NewsBlock title="Latest news" nodes={newsNodes} browseMoreHref="/archive/" />
        )}
      </Container>
    </Layout>
  );
};

export default IndexPage;
