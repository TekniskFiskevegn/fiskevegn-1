import { Link } from "gatsby";
import React from "react";
import Intro from "./intro";
import NewsTeaser from "./news-teaser";
import styles from "./list.module.css";
import { responsiveTitle1 } from "../components/typography.module.css";
import { cn } from "../lib/helpers";

// Improvements:
// 1. Add support for browseMoreHref

function List(props) {
  const { style, listItem, nodes } = props;

  return (
    <div className={styles.root}>
      <ul className={cn(styles.default, getCustomStyle(style))}>
        {nodes &&
          nodes.map(node => {
            return (
              <li key={node.id}>
                <RenderListItem typeOfListItem={listItem} node={node} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

const RenderListItem = props => {
  const { node, typeOfListItem } = props;
  switch (typeOfListItem) {
    case "NewsTeaser":
      return <NewsTeaser {...node} />;
    default:
      return <p>Missing type of list item</p>;
  }
};

const getCustomStyle = style => {
  if (!style) {
    return;
  }
  return cn(style == "gapFix" ? styles.gapFix : "", style == "oneThird" ? styles.oneThird : "");
};

List.defaultProps = {};

export default List;
