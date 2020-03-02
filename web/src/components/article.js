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
  const { _rawBody, title, introduction, image, publishedAt } = props;
  return (
    <Container>
      <Block>
        <InnerContainer>
          <div className={styles.maxWidth}>
            <Intro publishedAt={publishedAt} title={title} text={introduction} dropMarginOnTitle />
          </div>
        </InnerContainer>
      </Block>
      <Block verticalRhythm={{ top: 1 }}>
        <InnerContainer>
          {props.image && image.asset && (
            <div className={styles.image}>
              <img
                src={imageUrlFor(buildImageObj(image))
                  .width(1200)
                  .height(Math.floor((9 / 16) * 1200))
                  .fit("crop")
                  .url()}
                alt={image.alt}
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
