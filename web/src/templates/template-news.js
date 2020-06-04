import React from "react";
import { graphql } from "gatsby";
import { getLocale } from "../../sytalaust";

import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Article from "../components/article";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import localize from "../components/localize";

export const query = graphql`
  query NewsTemplateQuery($id: String!) {
    news: sanityTemplateNews(id: { eq: $id }) {
      id
      publishedAt
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
      title {
        _type
        en
        no
      }
      slug {
        _type
        en {
          current
        }
        no {
          current
        }
      }
      _rawBody
      _rawBodyNorwegian
    }
  }
`;

const NewsTemplate = props => {
  const { data, pageContext, location, errors } = props;
  const locale = getLocale(pageContext);

  const news = data && data.news;
  console.log("log data for news", news);

  return (
    <Layout locale={locale} location={location} info={props}>
      {errors && <SEO title="GraphQL Error" />}
      {news && <SEO title={news.title || "AS Fiskevegn"} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {news && <Article {...news} locale={locale} />}
    </Layout>
  );
};

export default localize(NewsTemplate);
