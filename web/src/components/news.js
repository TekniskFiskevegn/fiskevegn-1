import { Link } from "gatsby";
import React from "react";
import Intro from "./intro";
import NewsTeaser from "./news-teaser";
import styles from "./news.module.css";
import { responsiveTitle1 } from "../typography.module.css";

function News(props) {
  return (
    <div className={styles.root}>
      <Intro title={props.title} />
      <ul className={styles.list}>
        {props.nodes &&
          props.nodes.map(node => (
            <li className={styles.listItem} key={node.id}>
              <NewsTeaser {...node} />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to="/archive">More news</Link>
        </div>
      )}
    </div>
  );
}

News.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: ""
};

export default News;
