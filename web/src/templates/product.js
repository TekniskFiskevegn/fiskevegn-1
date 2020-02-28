// import React from "react";
// import { graphql } from "gatsby";
// import { getLocale } from "../../sytalaust";

// import Block from "../components/block";
// import Container from "../components/container";
// import GraphQLErrorList from "../components/graphql-error-list";
// import Intro from "../components/intro";
// import InnerContainer from "../components/inner-container";
// import Layout from "../containers/layout";
// import localize from "../components/localize";
// import Presentation from "../components/presentation";
// import SEO from "../components/seo";

// export const query = graphql`
//   query ProductTemplateQuery($id: String!) {
//     product: sanityProducts(id: { eq: $id }) {
//       id
//       title
//       text
//       slug {
//         current
//       }
//       models {
//         title
//         text
//         image {
//           crop {
//             _key
//             _type
//             top
//             bottom
//             left
//             right
//           }
//           hotspot {
//             _key
//             _type
//             x
//             y
//             height
//             width
//           }
//           asset {
//             _id
//           }
//           alt
//         }
//         email
//         link
//         # pdf {
//         #   asset {
//         #     _id
//         #   }
//         # }
//       }
//       # mainImage {
//       #   crop {
//       #     _key
//       #     _type
//       #     top
//       #     bottom
//       #     left
//       #     right
//       #   }
//       #   hotspot {
//       #     _key
//       #     _type
//       #     x
//       #     y
//       #     height
//       #     width
//       #   }
//       #   asset {
//       #     _id
//       #   }
//       #   alt
//       # }
//     }
//   }
// `;

// const ProductTemplate = props => {
//   const { pageContext, data, errors } = props;
//   const locale = getLocale(pageContext);
//   const product = data && data.product;

//   const { complementaryTitle, title, text, models } = product;

//   const nodes = models;

//   return (
//     <Layout locale={locale} {...props}>
//       <Container>
//         {errors && <SEO title="GraphQL Error" />}
//         {product && <SEO title={product.title || "Untitled"} />}

//         {errors && <GraphQLErrorList errors={errors} />}

//         {/* I could also make a specific component for this template item and initiate it here
//         But currently I see no use case for this, and for now that would just add overhead */}
//         {/* {categoryItem && <CategoryItem {...categoryItem} />} */}

//         <Block>
//           <InnerContainer>
//             <Intro complementaryTitle={complementaryTitle} title={title} text={text} />
//           </InnerContainer>
//         </Block>

//         {nodes &&
//           nodes.map(node => (
//             <Block key={node.id}>
//               <InnerContainer>
//                 <Presentation {...node} />
//               </InnerContainer>
//             </Block>
//           ))}
//       </Container>
//     </Layout>
//   );
// };

// export default localize(ProductTemplate);
