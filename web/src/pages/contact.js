import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";
import Layout from "../containers/layout";
import Container from "../components/container";
import InnerContainer from "../components/inner-container";
import Hero from "../components/hero";
import Block from "../components/block";
import Promoted from "../components/promoted";

import utils from "../components/utils.module.css";

import GraphQLErrorList from "../components/graphql-error-list";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs, cn } from "../lib/helpers";
import { flatraket, aalesund } from "../lib/ui";

const Contact = props => {
  // const flatraket = lang == "no" ? uiContact.flatraket.no : uiContact.flatraket.en
  const lang = "no";

  return (
    <Layout pageClass="" currentPage="contact" isCustomHeader={true}>
      <SEO title="AS Fiskevegn contact" />
      <Hero demoSrc="/related-images/contact.jpg" demo />
      <Container>
        <Block>
          <InnerContainer>
            <Promoted {...flatraket.no} />
          </InnerContainer>
        </Block>
        <InnerContainer>
          <InnerContainer>
            <Promoted {...aalesund.no} />
          </InnerContainer>
        </InnerContainer>
      </Container>
    </Layout>
  );
};

export default Contact;
