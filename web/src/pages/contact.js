import React from "react";
import { graphql } from "gatsby";
import { getLocale } from "../../sytalaust";

import Block from "../components/block";
import Container from "../components/container";
import Contact from "../components/contact";
import GraphQLErrorList from "../components/graphql-error-list";
import Hero from "../components/hero";
import InnerContainer from "../components/inner-container";
import Layout from "../containers/layout";
import localize from "../components/localize";
import SEO from "../components/seo";

export const query = graphql`
  query ContactPageQuery {
    page: sanityPageContact(_id: { regex: "/(drafts.|)pageContact/" }) {
      _id
      departments {
        intro {
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
          complementaryTitle {
            _type
            en
            no
          }
        }
        address
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
    }
  }
`;

const ContactPage = props => {
  const { data, pageContext, location, errors } = props;
  const locale = getLocale(pageContext);
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

  const { departments } = page;
  return (
    <Layout locale={locale} location={location} info={props}>
      <SEO title={locale == "en" ? "Contact" : "Kontakt"} />
      {departments && departments.length > 0 && (
        <Container>
          {departments.map((department, i) => {
            if (Math.abs(i % 2) != 1) {
              return (
                <Block key={i}>
                  <InnerContainer>
                    <Contact {...department} locale={locale} reverseFlow />
                  </InnerContainer>
                </Block>
              );
            } else {
              return (
                <Block key={i}>
                  <InnerContainer>
                    <Contact {...department} locale={locale} />
                  </InnerContainer>
                </Block>
              );
            }
          })}
        </Container>
      )}
    </Layout>
  );
};

export default localize(ContactPage);
// export default ContactPage;
