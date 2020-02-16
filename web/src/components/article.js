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
        <Block verticalRhythm={{ bottom: 0 }}>
          <InnerContainer>
            <Intro {...blockIntro} margin />
          </InnerContainer>
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
          <InnerContainer>
            <div className={styles.mainContent}>
              {_rawBody && <SanityBlockContent blocks={_rawBody || []} />}
            </div>

            {/* <aside className={styles.metaContent}>
                {publishedAt && (
                  <div className={styles.publishedAt}>
                    {differenceInDays(new Date(publishedAt), new Date()) > 3
                      ? distanceInWords(new Date(publishedAt), new Date())
                      : format(new Date(publishedAt), "MMMM Do YYYY")}
                  </div>
                )}
                {members && members.length > 0 && (
                  <RoleList items={members} title="Project members" />
                )}
                {categories && categories.length > 0 && (
                  <div className={styles.categories}>
                    <h3 className={styles.categoriesHeadline}>Categories</h3>
                    <ul>
                      {categories.map(category => (
                        <li key={category._id}>{category.title}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {relatedProjects && relatedProjects.length > 0 && (
                  <div className={styles.relatedProjects}>
                    <h3 className={styles.relatedProjectsHeadline}>Related projects</h3>
                    <ul>
                      {relatedProjects.map(project => (
                        <li key={`related_${project._id}`}>
                          {project.slug ? (
                            <Link to={`/news/${project.slug.current}`}>{project.title}</Link>
                          ) : (
                            <span>{project.title}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </aside> */}
          </InnerContainer>
        </Block>
      </Container>
    </article>
  );
}

export default Project;
