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

const Fishery = props => {
  return (
    <Layout isCustomHeader={true} pageClass={pages.products}>
      <SEO title="Fiskevegn products" />
      <HeroImage src="/bering-sea.jpg" />
      <Container>
        {/* <FrontpageImage {...frontpage} /> */}
        <div className={utils.verticalFlow}>
          <List type="category">
            <Card
              title="Automatic longline systems"
              description="sustainable solutions
                towards safer, cleaner oceans."
              isLink={true}
              linkSrc="fishery"
              hasImage={false}
              imgSrc="/fishery.jpg"
            />

            <Card
              title="Longlining"
              description="sustainable solutions
                towards safer, cleaner oceans."
              isLink={true}
              linkSrc="aquaculture"
              hasImage={false}
              imgSrc="/aquaculture.jpg"
            />

            <Card
              title="Gillnetting"
              description="sustainable solutions
                towards safer, cleaner oceans."
              isLink={true}
              linkSrc="rope-solutions"
              hasImage={false}
              imgSrc="/rope-2.jpg"
            />

            <Card
              title="Trawl fishery"
              description="sustainable solutions
                towards safer, cleaner oceans."
              isLink={true}
              linkSrc="general-supplies"
              hasImage={false}
              imgSrc="/fishery.jpg"
            />

            <Card
              title="Waste handling"
              description="sustainable solutions
                towards safer, cleaner oceans."
              isLink={true}
              linkSrc="general-supplies"
              hasImage={false}
              imgSrc="/fishery.jpg"
            />
          </List>
        </div>
      </Container>
    </Layout>
  );
};

export default Fishery;
