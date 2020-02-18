import React from "react";
import { graphql } from "gatsby";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs, cn } from "../lib/helpers";

import Block from "../components/block";
import Container from "../components/container";
import Contact from "../components/contact";
import GraphQLErrorList from "../components/graphql-error-list";
import Hero from "../components/hero";
import InnerContainer from "../components/inner-container";
import Layout from "../containers/layout";
import SEO from "../components/seo";

// styles
import listStyles from "../components/list.module.css";
import { flatraket, aalesund } from "../lib/ui";

export const query = graphql`
  query ContactPageQuery {
    page: sanityPageContact {
      _id
      title
      departments {
        complementaryTitle
        title
        text
        adress
        phone
        email
        map
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
      topImage {
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

const ContactPage = props => {
  const { data, errors } = props;
  console.log("log 'contact page' data", data);
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const page = (data || {}).page;
  if (!page) {
    throw new Error('Missing "page". Open the studio and add some content to this page.');
  }
  const departments = page.departments;

  return (
    <Layout pageClass="" currentPage="contact" isCustomHeader={true}>
      <SEO title="AS Fiskevegn contact" />
      {page.topImage && <Hero image={page.topImage} />}
      {departments && departments.length > 0 && (
        <Container>
          {departments.map(department => (
            <Block>
              <InnerContainer>
                <Contact {...department} />
              </InnerContainer>
            </Block>
          ))}
        </Container>
      )}
    </Layout>
  );
};

export default ContactPage;
