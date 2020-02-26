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
  query CategoryTemplateQuery($id: String!) {
    category: sanityCategories(id: { eq: $id }) {
      id
      complementaryTitle
      title
      text
      slug {
        current
      }
      sceneryImage {
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
    products: allSanityProducts(limit: 100) {
      edges {
        node {
          id
          title
          teaser
          slug {
            current
          }
          categoryReference {
            id
          }
        }
      }
    }
  }
`;

// Todo:
// 1. Make helper for filtering category products

const CategoryTemplate = props => {
  const { pageContext, data, errors } = props;
  const locale = getLocale(pageContext);

  let category = data && data.category;
  const allProducts = (data || {}).products ? mapEdgesToNodes(data.products) : [];

  const categoryProducts = allProducts.filter(product => {
    let innerFilter = product.categoryReference.filter(categoryReference => {
      return categoryReference.id === category.id;
    });
    return innerFilter.length > 0;
  });

  category = {
    ...category,
    products: categoryProducts
  };

  console.log("log category id", category.id);
  console.log("log categoryProducts", categoryProducts);

  const { title, complementaryTitle, text, sceneryImage, products } = category;

  const nodes = products;

  return (
    <Layout locale={locale} {...props}>
      <Container>
        {errors && <SEO txitle="GraphQL Error" />}
        {category && <SEO title={category.title || "Untitled"} />}

        {errors && <GraphQLErrorList errors={errors} />}

        {/* I could also make a specific component for this template item and initiate it here
        But currently I see no use case for this, and for now that would just add overhead */}
        {/* {categoryItem && <CategoryItem {...categoryItem} />} */}

        {/* Category begins */}
        <Block>
          <InnerContainer>
            <GoBack href="/products" />
            <Intro complementaryTitle={complementaryTitle} title={title} text={text} />
          </InnerContainer>
        </Block>
        <Block>
          <Design backgroundImage={category.sceneryImage} opacity="015">
            <InnerContainer>
              <Navigation nodes={nodes} nodeLinksToTemplate="product" />
            </InnerContainer>
          </Design>
        </Block>
      </Container>
    </Layout>
  );
};

export default localize(CategoryTemplate);
