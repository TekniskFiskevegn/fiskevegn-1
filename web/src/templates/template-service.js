import React from "react";
import { graphql } from "gatsby";
import { getLocale } from "../../sytalaust";

import Block from "../components/block";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import GoBack from "../components/go-back";
import Hero from "../components/hero";
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
      extraContentBlocks {
        title {
          _type
          en
          no
        }
        text {
          _type
          en
          no
        }
        attachedEmail
        attachedFile {
          asset {
            id
            url
          }
        }
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
      }
    }
  }
`;

const ServiceTemplate = props => {
  const { data, pageContext, location, errors } = props;
  const locale = getLocale(pageContext);

  const { basicTemplate, extraContentBlocks } = data && data.service;
  const { name, title, complementaryTitle, text, heroImage } = basicTemplate;

  return (
    <Layout locale={locale} location={location} info={props}>
      <Container>
        {errors && <SEO title="GraphQL Error" />}
        <SEO title={name || "AS Fiskevegn"} />

        {errors && <GraphQLErrorList errors={errors} />}

        <Block>
          <InnerContainer>
            <GoBack href={locale == "en" ? "/services" : "/tjenester"} />
            <Intro complementaryTitle={complementaryTitle} title={title} text={text} />
          </InnerContainer>
        </Block>
        {extraContentBlocks &&
          extraContentBlocks.map((contentBlock, i) => {
            if (Math.abs(i % 2) != 1) {
              return (
                <Block key={i}>
                  <InnerContainer>
                    <Presentation {...contentBlock} locale={locale} reverseFlow />
                  </InnerContainer>
                </Block>
              );
            } else {
              return (
                <Block key={i}>
                  <InnerContainer>
                    <Presentation {...contentBlock} locale={locale} />
                  </InnerContainer>
                </Block>
              );
            }
          })}
      </Container>
    </Layout>
  );
};

export default localize(ServiceTemplate);
