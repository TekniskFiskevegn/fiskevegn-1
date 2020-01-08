import { Link } from "gatsby";
import React from "react";
import { cn } from "../lib/helpers";
import Intro from "./intro";
import NewsTeaser from "./news-teaser";
import styles from "./list.module.css";

const List = ({ type, ...props }) => {
  switch (type) {
    case "twoandtwo":
      // two and two on large screens
      return <TwoAndTwoList {...props} />;
    case "nowrap":
      // list items not wrapping under each other
      return <NoWrapList {...props} />;
    case "vertical":
      // vertical list
      return <VerticalList {...props} />;
    case "justifiedCenter":
      // vertical list
      return <JustifiedCenterList {...props} />;
    case "justifiedSpaceAround":
      // vertical list
      return <JustifiedSpaceAroundList {...props} />;
    case "news":
      // vertical list
      return <NewsList {...props} />;
    default:
      return <DefaultList {...props} />;
  }
};

const DefaultList = ({ children, gap }) => (
  <ul
    className={cn(
      styles.root,
      styles.default,
      gap === "small" ? styles.smallGap : "",
      gap === "no" ? styles.noGap : "",
      gap === "large" ? styles.largeGap : ""
    )}
  >
    {React.Children.map(children, (child, i) => {
      return <li>{child}</li>;
    })}
  </ul>
);

const NewsList = ({ title, nodes, browseMoreHref }) => {
  return (
    <div className={styles.root}>
      <Intro title={title} />
      <ul className={cn(styles.ul, styles.news)}>
        {nodes &&
          nodes.map(node => (
            <li key={node.id}>
              <NewsTeaser {...node} />
            </li>
          ))}
      </ul>
      {browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to="/archive">More news</Link>
        </div>
      )}
    </div>
  );
};

const JustifiedCenterList = ({ children, gap }) => (
  // vertical list
  <ul
    className={cn(
      styles.root,
      styles.justifiedCenter,
      gap === "small" ? styles.smallGap : "",
      gap === "no" ? styles.noGap : "",
      gap === "large" ? styles.largeGap : ""
    )}
  >
    {React.Children.map(children, (child, i) => {
      return <li>{child}</li>;
    })}
  </ul>
);

const JustifiedSpaceAroundList = ({ children, gap }) => (
  // vertical list
  <ul
    className={cn(
      styles.root,
      styles.justifiedSpaceAround,
      gap === "small" ? styles.smallGap : "",
      gap === "no" ? styles.noGap : "",
      gap === "large" ? styles.largeGap : ""
    )}
  >
    {React.Children.map(children, (child, i) => {
      return <li>{child}</li>;
    })}
  </ul>
);

const VerticalList = ({ children, gap }) => (
  // vertical list
  <ul
    className={cn(
      styles.root,
      styles.vertical,
      gap === "small" ? styles.smallGap : "",
      gap === "no" ? styles.noGap : "",
      gap === "large" ? styles.largeGap : ""
    )}
  >
    {React.Children.map(children, (child, i) => {
      return <li>{child}</li>;
    })}
  </ul>
);

const NoWrapList = ({ children, gap }) => (
  // list items not wrapping under each other
  <ul
    className={cn(
      styles.root,
      styles.noWrap,
      gap === "small" ? styles.smallGap : "",
      gap === "no" ? styles.noGap : "",
      gap === "large" ? styles.largeGap : ""
    )}
  >
    {React.Children.map(children, (child, i) => {
      return <li>{child}</li>;
    })}
  </ul>
);

const TwoAndTwoList = ({ children, gap }) => (
  // two and two on large screens
  <ul
    className={cn(
      styles.root,
      styles.twoAndTwo,
      gap === "small" ? styles.smallGap : "",
      gap === "no" ? styles.noGap : "",
      gap === "large" ? styles.largeGap : ""
    )}
  >
    {React.Children.map(children, (child, i) => {
      return <li>{child}</li>;
    })}
  </ul>
);

export default List;
