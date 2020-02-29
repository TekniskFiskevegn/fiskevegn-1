import React from "react";
import { graphql } from "gatsby";
import { getLocale } from "../../sytalaust";

import Block from "../components/block";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Intro from "../components/intro";
import InnerContainer from "../components/inner-container";
import Layout from "../containers/layout";
import localize from "../components/localize";
import Presentation from "../components/presentation";
import SEO from "../components/seo";

export const query = graphql`
  query serviceTemplateQuery($id: String!) {
    service: sanityTemplateService(id: { eq: $id }) {
      id
      basicTemplate {
        name {
          _type
          en
          no
        }
        title {
          _type
          en
          no
        }
        complementaryTitle {
          _type
          en
          no
        }
        text {
          _type
          en
          no
        }
        heroImage {
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
      }
    }
  }
`;

const ServiceTemplate = props => {
  const { pageContext, data, errors } = props;
  const locale = getLocale(pageContext);

  const service = data && data.service;
  const { basicTemplate } = service;
  const { name, title, complementaryTitle, text, heroImage } = basicTemplate;

  return (
    <Layout locale={locale} {...props}>
      <Container>
        {errors && <SEO title="GraphQL Error" />}
        {service && <SEO title={service.title || "Untitled"} />}

        {errors && <GraphQLErrorList errors={errors} />}

        <Block>
          <InnerContainer>
            <Intro complementaryTitle={complementaryTitle} title={title} text={text} />
            <p>I am a service</p>
          </InnerContainer>
        </Block>
      </Container>
    </Layout>
  );
};

export default localize(ServiceTemplate);