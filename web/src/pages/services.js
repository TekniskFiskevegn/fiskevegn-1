import React from "react";
import { graphql } from "gatsby";
import { mapEdgesToNodes, cn } from "../lib/helpers";
import { getLocale } from "../../sytalaust";

import Block from "../components/block";
import Container from "../components/container";
import Design from "../components/design";
import GraphQLErrorList from "../components/graphql-error-list";
import InnerContainer from "../components/inner-container";
import Intro from "../components/intro";
import Layout from "../containers/layout";
import localize from "../components/localize";
import Navigation from "../components/navigation";
import SEO from "../components/seo";

export const query = graphql`
  query ServicesPageQuery {
    page: sanityPageServices {
      _id
      title {
        _type
        en
        no
      }
      # text
      # complementaryTitle
      # sceneryImage {
      #   crop {
      #     _key
      #     _type
      #     top
      #     bottom
      #     left
      #     right
      #   }
      #   hotspot {
      #     _key
      #     _type
      #     x
      #     y
      #     height
      #     width
      #   }
      #   asset {
      #     _id
      #   }
      #   alt
      # }
    }
    services: allSanityServices(limit: 10) {
      edges {
        node {
          id
          title {
            _type
            en
            no
          }
          slug {
            current
          }
        }
      }
    }
  }
`;

const ServicesPage = props => {
  const { data, errors, pageContext } = props;
  const locale = getLocale(pageContext);
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const page = (data || {}).page;
  const nodes = (data || {}).services ? mapEdgesToNodes(data.services) : [];

  if (!page) {
    throw new Error('Missing "page". Open the studio and add some content to this page.');
  }

  return (
    <Layout locale={locale} {...props}>
      <SEO title={locale == "en" ? "Services" : "Tjenester"} />
      <Container>
        <Block>
          <InnerContainer>
            <Intro
              complementaryTitle={page.complementaryTitle}
              title={page.title}
              text={page.text}
            />
          </InnerContainer>
        </Block>
        <Block>
          <Design backgroundImage={page.sceneryImage} opacity="015">
            <InnerContainer>
              <Navigation nodes={nodes} nodeLinksToTemplate="service" />
            </InnerContainer>
          </Design>
        </Block>
      </Container>
    </Layout>
  );
};

export default localize(ServicesPage);
