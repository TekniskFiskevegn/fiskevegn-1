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

import { demoText } from "../lib/dummy";

import styles from "./article.module.css";

function Project(props) {
  const { _rawBody, title, categories, mainImage, members, publishedAt, relatedProjects } = props;
  const blockIntro = {
    name: "14. januar 2020",
    title: `${title}`,
    text: `${demoText(3)}`
  };
  return (
    <article className={styles.root}>
      <Container>
        <Block>
          <InnerContainer>
            <Intro {...blockIntro} />
          </InnerContainer>
        </Block>
        <Block verticalRhythm={{ bottom: 0 }}>
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
            <div className={styles.mainContent}>
              {_rawBody && <SanityBlockContent blocks={_rawBody || []} />}
            </div>
          </InnerContainer>
        </Block>
      </Container>
    </article>
  );
}

export default Project;
