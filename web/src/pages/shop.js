import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container";
import Block from "../components/block";
import Intro from "../components/intro";
import InnerContainer from "../components/inner-container";

import utils from "../components/utils.module.css";

const ShopPage = () => (
  <Layout currentPage="shop">
    <SEO title="404: Not found" />
    <Container>
      <Block>
        <InnerContainer>
          <Intro backButton backTo="/" title="SHOP" text="Fiskevegn web shop coming soon." />
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

export default ShopPage;
