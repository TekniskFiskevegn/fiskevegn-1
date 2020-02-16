import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Product from "../components/product";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import InnerContainer from "../components/inner-container";

export const query = graphql`
  query ProductTemplateQuery($id: String!) {
    product: sanityProducts(id: { eq: $id }) {
      id
      name
      description
      slug {
        current
      }
      # mainImage {
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
  }
`;

const ProductTemplate = props => {
  const { data, errors } = props;
  const product = data && data.product;
  return (
    <Layout currentPage="products">
      <Container>
        {errors && <SEO title="GraphQL Error" />}
        {product && <SEO title={product.title || "Untitled"} />}

        {errors && (
          <Container>
            <GraphQLErrorList errors={errors} />
          </Container>
        )}
        {product && <Product {...product} />}
      </Container>
    </Layout>
  );
};

export default ProductTemplate;
