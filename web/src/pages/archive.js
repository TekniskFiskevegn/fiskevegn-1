import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Block from "../components/block";
import InnerContainer from "../components/inner-container";
import Intro from "../components/intro";
import List from "../components/list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs, cn } from "../lib/helpers";

export const query = graphql`
  query ArchivePageQuery {
    news: allSanityNews(
      limit: 12
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          mainImage {
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

const ArchivePage = props => {
  const { data, errors } = props;
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }
  const newsNodes =
    data && data.news && mapEdgesToNodes(data.news).filter(filterOutDocsWithoutSlugs);

  return (
    <Layout>
      <SEO title="Archive" />
      <Container>
        <Block name="news">
          <InnerContainer>
            <Intro title="AS Fiskevegn News" />
            <List style="oneHalf" listItem="NewsTeaser" nodes={newsNodes} />
          </InnerContainer>
        </Block>
      </Container>
    </Layout>
  );
};

export default ArchivePage;
