import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Block from "../components/block";
import InnerContainer from "../components/inner-container";
import List from "../components/list";
import Intro from "../components/intro";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from "../lib/helpers";

import utils from "../components/utils.module.css";
import { responsiveTitle1 } from "../components/typography.module.css";

export const query = graphql`
  query ArchivePageQuery {
    projects: allSanityNews(
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
  const projectNodes =
    data && data.projects && mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs);

  // console.log("projectNodes in archive", projectNodes);
  return (
    <Layout>
      <SEO title="Archive" />
      <Container>
        <Block name="news">
          <InnerContainer>
            {/* {projectNodes && projectNodes.length > 0 && <NewsBlock nodes={projectNodes} />} */}
            <List type="news" title="News archive" nodes={projectNodes} />
          </InnerContainer>
        </Block>
      </Container>
    </Layout>
  );
};

export default ArchivePage;
