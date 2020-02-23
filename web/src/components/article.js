import { format, distanceInWords, differenceInDays } from "date-fns";
import React from "react";
import { Link } from "gatsby";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import Block from "./block";
import BlockContent from "./sanity-block-content";
import Container from "./container";
import InnerContainer from "./inner-container";
import Intro from "./intro";

import styles from "./article.module.css";

function Article(props) {
  const {
    _rawBody,
    title,
    introduction,
    mainImage,
    publishedAt,
    members,
    categories,
    relatedProjects
  } = props;
  return (
    <Container>
      <Block>
        <InnerContainer>
          <Intro publishedAt={publishedAt} title={title} text={introduction} />
        </InnerContainer>
      </Block>
      <Block>
        <InnerContainer>
          {props.mainImage && mainImage.asset && (
            <div className={styles.mainImage}>
              <img
                src={imageUrlFor(buildImageObj(mainImage))
                  .width(1200)
                  .height(Math.floor((9 / 16) * 1200))
                  .fit("crop")
                  .url()}
                alt={mainImage.alt}
              />
            </div>
          )}
          <article className={styles.article}>
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </article>
        </InnerContainer>
      </Block>
    </Container>
  );
}

export default Article;
