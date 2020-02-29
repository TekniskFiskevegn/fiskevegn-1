import React from "react";
import { graphql } from "gatsby";
import { mapEdgesToNodes, cn } from "../lib/helpers";
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
  query productTemplateQuery($id: String!) {
    product: sanityTemplateProduct(id: { eq: $id }) {
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

const ProductTemplate = props => {
  const { pageContext, data, errors } = props;
  const locale = getLocale(pageContext);

  const product = data && data.product;

  if (!product) {
    throw new Error('Missing "product". Open the studio and add some content to this product.');
  }

  const { basicTemplate, extraContentBlocks } = product;
  const { name, title, complementaryTitle, text, heroImage } = basicTemplate;

  const nodesContentBlocks = extraContentBlocks ? mapEdgesToNodes(extraContentBlocks) : [];

  return (
    <Layout locale={locale} {...props}>
      <Container>
        {errors && <SEO title="GraphQL Error" />}
        {title && <SEO title={title || "AS Fiskevegn"} />}

        {errors && <GraphQLErrorList errors={errors} />}

        <Block>
          <InnerContainer>
            <Intro complementaryTitle={complementaryTitle} title={title} text={text} />
          </InnerContainer>
        </Block>

        {heroImage && (
          <Block>
            <Design backgroundImage={heroImage} opacity="025">
              <InnerContainer></InnerContainer>
            </Design>
          </Block>
        )}

        {nodesContentBlocks &&
          nodesContentBlocks.map(contentBlock => (
            <Block key={contentBlock.id}>
              <InnerContainer>
                <Presentation {...contentBlock} />
              </InnerContainer>
            </Block>
          ))}
      </Container>
    </Layout>
  );
};

export default localize(ProductTemplate);
