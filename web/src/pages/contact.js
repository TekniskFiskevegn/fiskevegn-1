import React from "react";
import { graphql } from "gatsby";

import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

import Container from "../components/container";
import Layout from "../containers/layout";

import GraphQLErrorList from "../components/graphql-error-list";
import HorizontalList from "../components/horizontal-list";
import List from "../components/list";
import Card from "../components/card";
import SEO from "../components/seo";
import HeroImage from "../components/hero-image";
import ProductTree from "../components/product-tree";
import BreadCrumb from "../components/breadcrumb";

import utils from "../components/utils.module.css";
import pages from "../components/pages.module.css";
import { responsiveTitle1 } from "../components/typography.module.css";

import { mapEdgesToNodes, filterOutDocsWithoutSlugs, cn } from "../lib/helpers";

// export const query = graphql`
//   query AboutQuery {
//     about: allSanityProject(
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

const Contact = props => {
  return (
    <Layout isCustomHeader={true} pageClass={pages.products} currentPage="contact">
      <SEO title="Fiskevegn products" />
      <HeroImage src="/contact.jpg" />
      <Container>
        <BreadCrumb />
        <div className={utils.verticalFlow}></div>
      </Container>
    </Layout>
  );
};

export default Contact;
