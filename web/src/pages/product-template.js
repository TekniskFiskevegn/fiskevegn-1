// import React from "react";
// import { graphql, Link } from "gatsby";

// import { buildImageObj } from "../lib/helpers";
// import { imageUrlFor } from "../lib/image-url";

// import Layout from "../containers/layout";
// import Container from "../components/container";
// import VerticalFlow from "../components/vertical-flow";
// import BlockIntro from "../components/block-intro";

// import GraphQLErrorList from "../components/graphql-error-list";
// import List from "../components/list";
// import Card from "../components/card";
// import SEO from "../components/seo";
// import HeroImage from "../components/hero-image";
// import ProductTree from "../components/product-tree";
// import BreadCrumb from "../components/breadcrumb";

// import utils from "../components/utils.module.css";
// import pages from "../components/pages.module.css";
// import { responsiveTitle1 } from "../components/typography.module.css";

// import { mapEdgesToNodes, filterOutDocsWithoutSlugs, cn } from "../lib/helpers";

// // export const query = graphql`
// //   query AboutQuery {
// //     about: allSanityProject(
// //       limit: 12
// //       sort: { fields: [publishedAt], order: DESC }
// //       filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
// //     ) {
// //       edges {
// //         node {
// //           id
// //           mainImage {
// //             asset {
// //               _id
// //             }
// //             alt
// //           }
// //           title
// //           _rawExcerpt
// //           slug {
// //             current
// //           }
// //         }
// //       }
// //     }
// //   }
// // `;

// const ProductTemplate = props => {
//   return (
//     <Layout isCustomHeader={true} pageClass={pages.products} currentPage="products">
//       <SEO title="Fiskevegn products" />
//       <HeroImage src="/bering-sea.jpg" />
//       <Container>
//         <BreadCrumb add />
//         <VerticalFlow>
//         <BlockIntro title="Fishery" text="We are proud to be one of the most trusted names in the global arena of longline fishing."/>
//         </VerticalFlow>
//         {/* <div className={utils.verticalFlow}>
//           <div className={utils.flex}>
//             <div className={utils.flexItemSmall}>
//               <ProductTree />
//             </div>
//             <div className={utils.flexItemMedium}>
//               <h2 className={responsiveTitle1}>Total provider of modern fishing solutions</h2>
//               <p>
//                 Since its inception Fiskevegn has built on the core values of quality, delivery and
//                 innovation. Our core values have yielded results for both our customer and for us.
//                 Fiskevegn is a leading international manufacturer and supplier of fiber, rope,
//                 fishing systems for automatic longlining, fishing gears and supplies for crew and
//                 vessels. We are proud to be one of the most trusted names in the global arena of
//                 longline fishing. We support vessel projects from idea to realization and can offer
//                 advice on everything from suitable shipyards, suppliers, alliance partners and how
//                 best to achieve optimal solutions for your vessel.
//               </p>
//             </div>
//           </div>
//         </div> */}
//       </Container>
//     </Layout>
//   );
// };

// export default ProductTemplate;
