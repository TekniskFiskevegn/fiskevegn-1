import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";
import Layout from "../containers/layout";
import Container from "../components/container";
import InnerContainer from "../components/inner-container";
import Block from "../components/block";
import BlockDesign from "../components/block-design";
import Intro from "../components/intro";
import List from "../components/list";
import Item from "../components/item";
import utils from "../components/utils.module.css";
import GraphQLErrorList from "../components/graphql-error-list";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs, cn } from "../lib/helpers";

import { demoServices } from "../lib/dummy";

const Service = props => {
  const nodes = demoServices;
  // const items = nodes.map(node => (
  //   <Item {...node} key={node.id || 1} style={{ attention: true, opacity: true }} />
  // ));
  const pageIntro = {
    name: "Services",
    title: "Industry know-how",
    text:
      "Fiskevegn supplies business-essential products and services. Supplying the ocean-going fishing fleet in particular can be compared to servicing the airline industry. Many ocean-going fishing vessels barely touch base before returning back to sea. Also for coastal vessels, the reality is that if essensial equipment breaks down or gears are lost, there may be no choice but to return to port while losing time and revenues."
  };

  return (
    <Layout pageClass="" currentPage="services">
      <SEO title="Fiskevegn products" />
      <Container>
        <Block>
          <InnerContainer>
            <Intro {...pageIntro} />
          </InnerContainer>
        </Block>
        <Block>
          <BlockDesign bgImage="/sceneries/scenery-6.jpg" opacityClass="015">
            <InnerContainer>
              <div className={utils.boxShadowSubtle}>
                <List nodes={nodes} listStyle="nav" listItemStyle="nav" />
              </div>
            </InnerContainer>
          </BlockDesign>
        </Block>
      </Container>
    </Layout>
  );
};

export default Service;
