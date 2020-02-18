import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container";
import Block from "../components/block";
import Intro from "../components/intro";
import BlockDesign from "../components/block-design";
import InnerContainer from "../components/inner-container";

import utils from "../components/utils.module.css";
import "../styles/pages.css";

const ShopPage = () => (
  <Layout currentPage="shop">
    <SEO title="404: Not found" />
    <Container>
      <Block>
        <InnerContainer>
          <Intro backButton backTo="/" title="SHOP" text="Fiskevegn web shop coming soon." />
        </InnerContainer>
      </Block>
    </Container>
  </Layout>
);

export default ShopPage;
