import React from "react";
import { graphql } from "gatsby";
import { getLocale } from "../../sytalaust";

import Block from "../components/block";
import Design from "../components/design";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import InnerContainer from "../components/inner-container";
import Intro from "../components/intro";
import Layout from "../containers/layout";
import localize from "../components/localize";
import SEO from "../components/seo";

const ShopPage = props => {
  const { data, pageContext, location, errors } = props;
  const locale = getLocale(pageContext);

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  return (
    <Layout locale={locale} location={location} info={props}>
      <SEO title={locale == "en" ? "Shop" : "Nettbutikk"} />
      <Container>
        <Block>
          <InnerContainer>
            <Intro
              title={locale == "en" ? "Webshop" : "Nettbutikk"}
              complementaryTitle={locale == "en" ? "Coming" : "Kommer"}
              text={
                locale == "en"
                  ? "AS Fiskevegn webshop is coming during the first half of 2020."
                  : "AS Fiskevegn nettbutikk kommer i løpet av første halvår 2020."
              }
            />
          </InnerContainer>
        </Block>
        <Block>
          <InnerContainer>
            <img src="/images/grundens.jpg" alt="" />
          </InnerContainer>
        </Block>
      </Container>
    </Layout>
  );
};

export default localize(ShopPage);
