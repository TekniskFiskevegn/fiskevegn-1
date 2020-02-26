import React from "react";
import { getLocale } from "../../sytalaust";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container";
import Block from "../components/block";
import Intro from "../components/intro";
import InnerContainer from "../components/inner-container";
import localize from "../components/localize";

const ShopPage = props => {
  const { pageContext } = props;
  const locale = getLocale(pageContext);

  return (
    <Layout locale={locale} {...props}>
      <SEO title={locale == "en" ? "Shop - AS Fiskevegn" : "Shop - AS Fiskevegn"} />
      <Container>
        <Block>
          <InnerContainer>
            <Intro
              backButton
              backTo="/"
              title={locale == "en" ? "Shop" : "Nettbutikk"}
              text={
                locale == "en"
                  ? "AS Fiskevegn web shop coming soon!"
                  : "AS Fiskevegn nettbutikk kommer snart!"
              }
            />
          </InnerContainer>
        </Block>
        <Block>
          <InnerContainer>
            <div>
              <img src="/related-images/ship.jpg" />
            </div>
          </InnerContainer>
        </Block>
      </Container>
    </Layout>
  );
};

export default localize(ShopPage);
