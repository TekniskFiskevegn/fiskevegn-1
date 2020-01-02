import { Link } from "gatsby";
import React from "react";
import { cn } from "../lib/helpers";

import styles from "./list.module.css";

const List = ({ type, children, gap = null }) => {

  switch (type) {
    case "twoandtwo":
      // two and two on large screens
      return <TwoAndTwoList children={children} gap={gap} />;
    case "nowrap":
      // list items not wrapping under each other
      return <NoWrapList children={children} gap={gap} />;
    case "vertical":
      // vertical list
      return <VerticalList children={children} gap={gap} />;
    case "justifiedCenter":
      // vertical list
      return <JustifiedCenterList children={children} gap={gap} />;
    case "justifiedSpaceAround":
      // vertical list
      return <JustifiedSpaceAroundList children={children} gap={gap} />;            
    default:
      return <DefaultList children={children} gap={gap} />;
  }
};

const DefaultList = ({ children, gap }) => (
  <ul className={cn(styles.root, styles.default, gap === "small" ? styles.smallGap : "", gap === "no" ? styles.noGap : "", gap === "large" ? styles.largeGap : "" )}>
    {React.Children.map(children, (child, i) => {
      return <li>{child}</li>;
    })}
  </ul>
);

const JustifiedCenterList = ({ children, gap }) => (
  // vertical list
  <ul className={cn(styles.root, styles.justifiedCenter, gap === "small" ? styles.smallGap : "", gap === "no" ? styles.noGap : "", gap === "large" ? styles.largeGap : "" )}>
    {React.Children.map(children, (child, i) => {
      return <li>{child}</li>;
    })}
  </ul>
);

const JustifiedSpaceAroundList = ({ children, gap }) => (
  // vertical list
  <ul className={cn(styles.root, styles.justifiedSpaceAround, gap === "small" ? styles.smallGap : "", gap === "no" ? styles.noGap : "", gap === "large" ? styles.largeGap : "" )}>
    {React.Children.map(children, (child, i) => {
      return <li>{child}</li>;
    })}
  </ul>
);

const VerticalList = ({ children, gap }) => (
  // vertical list
  <ul className={cn(styles.root, styles.vertical, gap === "small" ? styles.smallGap : "", gap === "no" ? styles.noGap : "", gap === "large" ? styles.largeGap : "" )}>
    {React.Children.map(children, (child, i) => {
      return <li>{child}</li>;
    })}
  </ul>
);

const NoWrapList = ({ children, gap }) => (
  // list items not wrapping under each other
  <ul className={cn(styles.root, styles.noWrap, gap === "small" ? styles.smallGap : "", gap === "no" ? styles.noGap : "", gap === "large" ? styles.largeGap : "" )}>
    {React.Children.map(children, (child, i) => {
      return <li>{child}</li>;
    })}
  </ul>
);

const TwoAndTwoList = ({ children, gap }) => (
  // two and two on large screens
  <ul className={cn(styles.root, styles.twoAndTwo, gap === "small" ? styles.smallGap : "", gap === "no" ? styles.noGap : "", gap === "large" ? styles.largeGap : "" )}>
    {React.Children.map(children, (child, i) => {
      return <li>{child}</li>;
    })}
  </ul>
);

export default List;
