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

import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";

import { demoText } from "../lib/demoContent";

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
  // this is how it should be
  const { image, products, services } = (data || {}).frontpage;
  const { promotedBlock, fullWidthBlock } = (data || {}).frontpage;

  const mockBlock1 = {
    introTitle: "Modern fishing solutions",
    introText:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
    image: promotedBlock.image,
    title: "Our Products",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores porro iste sint suscipit excepturi aliquid a laudantium nihil rerum nisi. Saepe pariatur at atque esse accusamus repellendus exercitationem iusto odio!",
    browseMoreHref: "See our products"
  };

  const mockBlock2 = {
    introTitle: "Rewarding Collaborations",
    introText:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
    image: null,
    title: "Our Service",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores porro iste sint suscipit excepturi aliquid a laudantium nihil rerum nisi. Saepe pariatur at atque esse accusamus repellendus exercitationem iusto odio!",
    browseMoreHref: "See our services"
  };

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
      <Hero {...frontpage} />
      <Container>
        <h1 hidden>{site.title}</h1>
        {promotedBlock && (
          <Block name="products">
            <InnerContainer>
              <Promoted {...mockBlock1} />
            </InnerContainer>
          </Block>
        )}

        {fullWidthBlock && (
          <Block name="services">
            <BlockDesign
              svg={{
                wave: true,
                number: "1"
              }}
            >
              <InnerContainer>
                <Promoted {...mockBlock2} lightTheme />
              </InnerContainer>
            </BlockDesign>
          </Block>
        )}
        {newsNodes && (
          <Block name="news">
            <InnerContainer>
              <List type="news" title="Latest news" nodes={newsNodes} browseMoreHref="/archive/" />
            </InnerContainer>
          </Block>
        )}
      </Container>
    </Layout>
  );
};

export default IndexPage;
