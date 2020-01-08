// import React from "react";
// import { graphql } from "gatsby";

// import { buildImageObj } from "../lib/helpers";
// import { imageUrlFor } from "../lib/image-url";

// import Container from "../components/container";
// import Layout from "../containers/layout";

// import GraphQLErrorList from "../components/graphql-error-list";
// import List from "../components/list";
// import Card from "../components/card";
// import SEO from "../components/seo";
// import HeroImage from "../components/hero-image";
// import ContactBlock from "../components/contact-block";
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

// const Contact = props => {
//   const nodes = [{}];
//   return (
//     <Layout isCustomHeader={true} pageClass={pages.products} currentPage="contact">
//       <SEO title="Fiskevegn products" />
//       <HeroImage src="/contact.jpg" />
//       <Container>
//         <div className={utils.verticalFlow}>
//           <ContactBlock
//             image="/office.jpg"
//             title="Norway"
//             tinyTitle="Main Office"
//             description="Our main office is located at beautiful Flatraket."
//             textTitle="Main Office"
//           />
//         </div>
//         <div className={utils.verticalFlow}>
//           <ContactBlock
//             image="/aalesund.jpg"
//             title="Ålesund"
//             tinyTitle="Department"
//             description="Our department in Ålesund, Norway, is responsible for Equipment"
//             textTitle="Ålesund"
//           />
//         </div>
//         <div className={utils.verticalFlow}>
//           <ContactBlock
//             image="/new-zealand.jpg"
//             title="New Zealand"
//             tinyTitle="Department"
//             description="Our department in New Zealand is responsible for fishery in antarctica"
//             textTitle="New Zealand"
//           />
//         </div>
//       </Container>
//     </Layout>
//   );
// };

// export default Contact;
