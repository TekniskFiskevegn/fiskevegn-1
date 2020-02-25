import React from "react";
import { graphql } from "gatsby";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs, cn } from "../lib/helpers";

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
    template: sanityServices(id: { eq: $id }) {
      id
      title {
        _type
        en
        no
      }
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

const ServiceTemplate = props => {
  console.log("log props service template", props);
  const { data, errors, pageContext } = props;
  const locale = pageContext.locale ? pageContext.locale : "default";
  const template = data && data.template;

  return (
    <Layout currentPage="Services" locale={locale}>
      <Container>
        {errors && <SEO title="GraphQL Error" />}
        {template && <SEO title={template.title || "Untitled"} />}

        {errors && <GraphQLErrorList errors={errors} />}

        {/* I could also make a specific component for this template item and initiate it here
        But currently I see no use case for this, and for now that would just add overhead */}
        {/* {categoryItem && <CategoryItem {...categoryItem} />} */}

        {/* Service begins */}
        <Block>
          <InnerContainer>
            {/* <Intro complementaryTitle="hmm" title={template.title} text="hmm" /> */}
            <p>foo {template.title}</p>
          </InnerContainer>
        </Block>
      </Container>
    </Layout>
  );
};

export default localize(ServiceTemplate);
