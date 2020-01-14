import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container";
import Block from "../components/block";
import Intro from "../components/Intro";
import BlockDesign from "../components/block-design";
import InnerContainer from "../components/inner-container";

import utils from "../components/utils.module.css";
import "../styles/pages.css";

const NotFoundPage = () => (
  <Layout isCustomHeader={false} pageClass="contentNotFound">
    <SEO title="404: Not found" />
    <Container>
      <Block>
        <InnerContainer>
        <Intro
            backButton
            backTo="/"
              name="404"
              title="Content Not Found"
              text="Sorry, but this page doesn`t exist. Go back to our homepage and keep looking."
            />
        </InnerContainer>
      </Block>
    </Container>
  </Layout>
);

export default NotFoundPage;
