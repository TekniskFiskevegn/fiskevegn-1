import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Article from "../components/article";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  query NewsTemplateQuery($id: String!) {
    news: sanityNews(id: { eq: $id }) {
      id
      publishedAt
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
      introduction
      slug {
        current
      }
      _rawBody
    }
  }
`;

const NewsTemplate = props => {
  const { data, errors } = props;
  const news = data && data.news;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {news && <SEO title={news.title || "Untitled"} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {news && <Article {...news} />}
    </Layout>
  );
};

export default NewsTemplate;
