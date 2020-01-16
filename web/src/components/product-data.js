import React from "react";
import { graphql } from "gatsby";

import SEO from "../components/seo";
import Layout from "../containers/layout";
import Container from "../components/container";
import InnerContainer from "../components/inner-container";
import Block from "../components/block";
import BlockDesign from "../components/block-design";
import Hero from "../components/hero";
import Intro from "../components/intro";
import List from "../components/list";

import utils from "../components/utils.module.css";
import styles from "../components/product-template.module.css";

import GraphQLErrorList from "../components/graphql-error-list";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs, cn } from "../lib/helpers";
import Svg from "../components/svg";

const ProductTemplate = props => {
  return (
    <div className={}>
      <div className="firstColumn">
        <Svg blob number="1" />
      </div>
      <div className="secondColumn">
        <p>Product information</p>
      </div>
    </div>
  );
};

export default ProductTemplate;
