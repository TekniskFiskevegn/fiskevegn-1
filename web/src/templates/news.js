import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import News from "../components/news-article";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  query NewsTemplateQuery($id: String!) {
    news: sanityNews(id: { eq: $id }) {
      id
      publishedAt
      # categories {
      #   _id
      #   title
      # }
      relatedProjects {
        title
        _id
        slug {
          current
        }
      }
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
      slug {
        current
      }
      _rawBody
      members {
        _key
        person {
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
          }
          name
        }
        roles
      }
    }
  }
`;

const NewsTemplate = props => {
  const { data, errors } = props;
  const project = data && data.news;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {project && <SEO title={project.title || "Untitled"} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {project && <News {...project} />}
    </Layout>
  );
};

export default NewsTemplate;
