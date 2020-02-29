// import React from "react";
// import { graphql } from "gatsby";
// import { getLocale } from "../../sytalaust";

// import Container from "../components/container";
// import GraphQLErrorList from "../components/graphql-error-list";
// import Article from "../components/article";
// import SEO from "../components/seo";
// import Layout from "../containers/layout";
// import localize from "../components/localize";

// export const query = graphql`
//   query NewsTemplateQuery($id: String!) {
//     news: sanityNews(id: { eq: $id }) {
//       id
//       publishedAt
//       mainImage {
//         crop {
//           _key
//           _type
//           top
//           bottom
//           left
//           right
//         }
//         hotspot {
//           _key
//           _type
//           x
//           y
//           height
//           width
//         }
//         asset {
//           _id
//         }
//         alt
//       }
//       title
//       introduction
//       slug {
//         current
//       }
//       _rawBody
//     }
//   }
// `;

// const NewsTemplate = props => {
//   const { pageContext, data, errors } = props;
//   const locale = getLocale(pageContext);

//   const news = data && data.news;
//   return (
//     <Layout locale={locale} {...props}>
//       {errors && <SEO title="GraphQL Error" />}
//       {news && <SEO title={news.title || "Untitled"} />}

//       {errors && (
//         <Container>
//           <GraphQLErrorList errors={errors} />
//         </Container>
//       )}
//       {news && <Article {...news} />}
//     </Layout>
//   );
// };

// export default localize(NewsTemplate);
