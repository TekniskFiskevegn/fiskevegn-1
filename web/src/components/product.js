import { format, distanceInWords, differenceInDays } from "date-fns";
import React from "react";
import { Link } from "gatsby";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import SanityBlockContent from "./sanity-block-content";
import Container from "./container";
import Block from "./block";
import Intro from "./intro";
import InnerContainer from "./inner-container";
import Layout from "../containers/layout";
import RoleList from "./role-list";

import { demoText } from "../lib/dummy";

import styles from "./article.module.css";

function Product(props) {
  const { name, description } = props;

  return (
    <Block>
      <InnerContainer>
        <Intro name="Product" title={name} text={description} />
        <h2>Product components</h2>
      </InnerContainer>
    </Block>
  );
}

export default Product;
