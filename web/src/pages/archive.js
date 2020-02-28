// import React from "react";
// import { graphql } from "gatsby";
// import { mapEdgesToNodes, filterOutDocsWithoutSlugs, log } from "../lib/helpers";
// import { getLocale } from "../../sytalaust";

// import Container from "../components/container";
// import GraphQLErrorList from "../components/graphql-error-list";
// import Block from "../components/block";
// import InnerContainer from "../components/inner-container";
// import Intro from "../components/intro";
// import List from "../components/list";
// import SEO from "../components/seo";
// import Layout from "../containers/layout";
// import localize from "../components/localize";

// export const query = graphql`
//   query ArchivePageQuery {
//     news: allSanityNews(
//       limit: 12
//       sort: { fields: [publishedAt], order: DESC }
//       filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
//     ) {
//       edges {
//         node {
//           id
//           mainImage {
//             asset {
//               _id
//             }
//             alt
//           }
//           title
//           _rawExcerpt
//           slug {
//             current
//           }
//         }
//       }
//     }
//   }
// `;

// const ArchivePage = props => {
//   const { pageContext, data, errors } = props;
//   const locale = getLocale(pageContext);
//   if (errors) {
//     return (
//       <Layout>
//         <GraphQLErrorList errors={errors} />
//       </Layout>
//     );
//   }
//   const newsNodes =
//     data && data.news && mapEdgesToNodes(data.news).filter(filterOutDocsWithoutSlugs);

//   return (
//     <Layout locale={locale} {...props}>
//       <SEO title={locale == "en" ? "News" : "Nyheter"} />
//       <Container>
//         <Block>
//           <InnerContainer>
//             <Intro title={locale == "en" ? "News archive" : "Nyhetsarkiv"} />
//             <List style="oneHalfWithGapAndGridFix" listItem="NewsTeaser" nodes={newsNodes} />
//           </InnerContainer>
//         </Block>
//       </Container>
//     </Layout>
//   );
// };

// export default localize(ArchivePage);
