import React from "react";
import { graphql } from "gatsby";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs, log } from "../lib/helpers";
import { getLocale } from "../../sytalaust";

import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Block from "../components/block";
import InnerContainer from "../components/inner-container";
import Intro from "../components/intro";
import List from "../components/list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import localize from "../components/localize";

export const query = graphql`
  query ArchivePageQuery {
    news: allSanityTemplateNews(limit: 12, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          image {
            asset {
              _id
            }
            alt
          }
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
        }
      }
    }
  }
`;

const ArchivePage = props => {
  const { data, pageContext, location, errors } = props;
  const locale = getLocale(pageContext);
  // console.log('log locale in archive', locale)

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
    <Layout locale={locale} location={location} info={props}>
      <SEO title={locale == "en" ? "News" : "Nyheter"} />
      <Container>
        <Block>
          <InnerContainer>
            <Intro title={locale == "en" ? "News" : "Nyheter"} textAlignLeft />
            <List
              style="oneHalfWithGapAndGridFix"
              listItem="NewsTeaser"
              nodes={newsNodes}
              locale={locale}
            />
          </InnerContainer>
        </Block>
      </Container>
    </Layout>
  );
};

export default localize(ArchivePage);
