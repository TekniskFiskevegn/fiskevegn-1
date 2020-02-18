import React from "react";
import { graphql } from "gatsby";
import { cn } from "../lib/helpers";

import Block from "../components/block";
import Container from "../components/container";
import Design from "../components/block-design";
import GraphQLErrorList from "../components/graphql-error-list";
import InnerContainer from "../components/inner-container";
import Intro from "../components/intro";
import Layout from "../containers/layout";
import NavigationItem from "../components/navigation-item";
import SEO from "../components/seo";

// styles
import listStyles from "../components/list.module.css";
// static data
import { staticProductCategories } from "../lib/static";

export const query = graphql`
  query ServicesPageQuery {
    page: sanityPageServices {
      _id
      title
      complementaryTitle
      text
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
  }
`;

const ServicesPage = props => {
  const { data, errors } = props;
  console.log("log 'product page' data", data);
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const page = (data || {}).page;
  // static nodes
  const nodes = staticProductCategories;

  if (!page) {
    throw new Error('Missing "page". Open the studio and add some content to this page.');
  }

  return (
    <Layout currentPage="services">
      <SEO title="Fiskevegn services" />
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
              <ul className={cn(listStyles.ul, listStyles.nav, listStyles.boxShadow)}>
                {nodes &&
                  nodes.map(node => (
                    <li key={node.id}>
                      <NavigationItem {...node} />
                    </li>
                  ))}
              </ul>
            </InnerContainer>
          </Design>
        </Block>
      </Container>
    </Layout>
  );
};

export default ServicesPage;
