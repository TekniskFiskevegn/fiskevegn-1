import React from "react";
import { getLocale } from "../../sytalaust";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container";
import Block from "../components/block";
import Intro from "../components/intro";
import InnerContainer from "../components/inner-container";
import localize from "../components/localize";

import "../styles/pages.css";

const NotFoundPage = () => {
  const locale = getLocale(pageContext);
  return (
    <Layout locale={locale} {...props}>
      <SEO title={locale === "en" ? "404 - Not found" : "404 - Fant ikke innhold"} />
      <Container>
        <Block>
          <InnerContainer>
            <Intro
              backButton
              backTo="/"
              name="404"
              title={locale == "en" ? "Content Not Found" : "Ikke funnet"}
              text={
                locale == "en"
                  ? "Sorry, but this page doesn`t exist. Go back to our homepage and keep looking."
                  : "Beklager, men denne siden finnes ikke. Gå tilbake til vår startside og prøv lykken på nytt."
              }
            />
          </InnerContainer>
        </Block>
      </Container>
    </Layout>
  );
};

export default localize(NotFoundPage);
