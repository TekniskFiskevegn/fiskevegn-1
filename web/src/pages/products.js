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
import Card from "../components/item";
import utils from "../components/utils.module.css";
import GraphQLErrorList from "../components/graphql-error-list";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs, cn } from "../lib/helpers";

const Products = props => {
  const demoNodes = [
    {
      id: "Fishery",
      title: "Fishery",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores poro iste.",
      url: "/product-category"
    },
    {
      id: "Aquaculture",
      title: "Aquaculture",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores poro iste.",
      url: "/not-found"
    },
    {
      id: "Ropes",
      title: "Ropes",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores poro iste.",
      url: "/not-found"
    },
    {
      id: "General-supplies",
      title: "General supplies",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores poro iste.",
      url: "/not-found"
    }
  ];

  const pageIntro = {
    name: "Categories",
    title: "Total provider of modern fishing solutions",
    text:
      "Since its inception Fiskevegn has built on the core values of quality, delivery and innovation. Our core values have yielded results for both our customer and for us. Fiskevegn is a leading international manufacturer and supplier of fiber, rope, fishing systems for automatic longlining, fishing gears and supplies for crew and vessels. We are proud to be one of the most trusted names in the global arena of longline fishing."
  };

  const nodes = demoNodes;

  const categories = nodes.map(node => (
    <Card {...node} styling={{ flat: true, opacity: true }} key={node.id} />
  ));

  return (
    <Layout pageClass="" currentPage="products">
      <SEO title="Fiskevegn products" />
      <Container>
        <Block>
          <InnerContainer>
            <Intro {...pageIntro} />
          </InnerContainer>
        </Block>
        <Block>
          <BlockDesign bgImage="/sceneries/scenery-7.jpg" opacityClass="015">
            <InnerContainer>
              <div className={utils.boxShadow}>
                <List type="fiftyfifty" noGap oddBorder>
                  {categories}
                </List>
              </div>
            </InnerContainer>
          </BlockDesign>
        </Block>
      </Container>
    </Layout>
  );
};

export default Products;
