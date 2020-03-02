import React from "react";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";
import { getLocale } from "../../sytalaust";

import Block from "../components/block";
import Container from "../components/container";
import Design from "../components/design";
import GraphQLErrorList from "../components/graphql-error-list";
import GoBack from "../components/go-back";
import Intro from "../components/intro";
import InnerContainer from "../components/inner-container";
import Layout from "../containers/layout";
import localize from "../components/localize";
import Navigation from "../components/navigation";
import SEO from "../components/seo";

export const query = graphql`
  query ProductCategoryQuery($id: String!) {
    category: sanityTemplateProductCategory(id: { eq: $id }) {
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
    products: allSanityTemplateProduct(limit: 100) {
      edges {
        node {
          id
          basicTemplate {
            name {
              _type
              en
              no
            }
            navigationText {
              _type
              en
              no
            }
            slug {
              _type
              en {
                current
              }
              no {
                current
              }
            }
          }
          belongsToCategory {
            id
          }
        }
      }
    }
  }
`;

const ProductCategoryTemplate = props => {
  const { data, pageContext, location, errors } = props;
  const locale = getLocale(pageContext);

  const { basicTemplate, id } = data && data.category;
  const { name, title, complementaryTitle, text, heroImage } = basicTemplate;

  const allProducts = (data || {}).products ? mapEdgesToNodes(data.products) : [];

  const categoryProducts = allProducts.filter(product => {
    let innerFilter = product.belongsToCategory.filter(c => {
      return c.id === id;
    });
    return innerFilter.length > 0;
  });

  return (
    <Layout locale={locale} location={location} info={props}>
      <Container>
        {errors && <SEO txitle="GraphQL Error" />}
        <SEO title={title || "AS Fiskevegn"} />

        {errors && <GraphQLErrorList errors={errors} />}

        <Block>
          <InnerContainer>
            <GoBack href="/products" />
            <Intro complementaryTitle={complementaryTitle} title={title} text={text} />
          </InnerContainer>
        </Block>
        <Block>
          <Design backgroundImage={heroImage} opacity="015">
            <InnerContainer>
              <Navigation
                nodes={categoryProducts}
                template={{ en: "product", no: "no/produkt" }}
                locale={locale}
              />
            </InnerContainer>
          </Design>
        </Block>
      </Container>
    </Layout>
  );
};

export default localize(ProductCategoryTemplate);
