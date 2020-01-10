import { Link } from "gatsby";
import React from "react";
import { cn } from "../lib/helpers";
import Intro from "./intro";
import NewsTeaser from "./news-teaser";
import styles from "./list.module.css";
import utils from "./utils.module.css";

const List = ({ type, ...props }) => {
  switch (type) {
    case "fiftyfifty":
      // two and two on large screens
      return <FiftyFiftyList {...props} />;
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

const DefaultList = ({ ...props }) => {
  const { children } = props;
  return (
    <div styles={styles.root}>
      <ul className={cn(styles.ul, styles.defaultList)}>
        {React.Children.map(children, (child, i) => {
          return <li>{child}</li>;
        })}
      </ul>
    </div>
  );
};

const NewsList = ({ title, nodes, browseMoreHref }) => {
  return (
    <div className={styles.root}>
      <Intro title={title} />
      <ul className={cn(styles.ul, styles.newsList)}>
        {nodes &&
          nodes.map(node => (
            <li key={node.id}>
              <NewsTeaser {...node} />
            </li>
          ))}
      </ul>
      {browseMoreHref && (
        <div className={utils.textAlignRight}>
          <Link to="/archive">More news</Link>
        </div>
      )}
    </div>
  );
};

const JustifiedCenterList = ({ ...props }) => {
  const { children } = props;
  return (
    <div styles={styles.root}>
      <ul className={cn(styles.ul, styles.justifiedCenterList)}>
        {React.Children.map(children, (child, i) => {
          return <li>{child}</li>;
        })}
      </ul>
    </div>
  );
};

const JustifiedSpaceAroundList = ({ ...props }) => {
  const { children } = props;
  return (
    <div className={styles.root}>
      <ul className={cn(styles.ul, styles.justifiedSpaceAroundList)}>
        {React.Children.map(children, (child, i) => {
          return <li>{child}</li>;
        })}
      </ul>
    </div>
  );
};

const VerticalList = ({ ...props }) => {
  const { children } = props;
  return (
    <div className={styles.root}>
      <ul className={cn(styles.ul, styles.verticalList)}>
        {React.Children.map(children, (child, i) => {
          return <li>{child}</li>;
        })}
      </ul>
    </div>
  );
};

const NoWrapList = ({ ...props }) => {
  const { children } = props;
  return (
    <div className={styles.root}>
      <ul className={cn(styles.ul, styles.noWrapList)}>
        {React.Children.map(children, (child, i) => {
          return <li>{child}</li>;
        })}
      </ul>
    </div>
  );
};

const FiftyFiftyList = ({ ...props }) => {
  const { children, noGap, oddBorder } = props;
  return (
    <div className={styles.root}>
      <ul
        className={cn(
          styles.ul,
          styles.fiftyFiftyList,
          noGap ? styles.noGap : "",
          oddBorder ? styles.oddBorder : ""
        )}
      >
        {React.Children.map(children, (child, i) => {
          return <li>{child}</li>;
        })}
      </ul>
    </div>
  );
};

export default List;
