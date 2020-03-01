import React from "react";
import { getLocale } from "../../sytalaust";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container";
import Block from "../components/block";
import Design from "../components/design";
import Intro from "../components/intro";
import InnerContainer from "../components/inner-container";
import localize from "../components/localize";

const ShopPage = props => {
  const { pageContext } = props;
  const locale = getLocale(pageContext);

  return (
    <Layout locale={locale} {...props}>
      <SEO title={locale == "en" ? "Shop" : "Nettbutikk"} />
      <Container>
        <Block>
          <InnerContainer>
            <Intro
              backButton
              backTo="/"
              title={locale == "en" ? "Shop" : "Nettbutikk"}
              text={
                locale == "en"
                  ? "AS Fiskevegn webshop is coming during the first half of 2020."
                  : "AS Fiskevegn nettbutikk kommer i løpet av første halvår 2020."
              }
            />
          </InnerContainer>
        </Block>
        <Block>
          <Design backgroundImage="/images/shop.jpg" isStatic opacity="015" flex>
            <InnerContainer></InnerContainer>
          </Design>
        </Block>
      </Container>
    </Layout>
  );
};

export default localize(ShopPage);
