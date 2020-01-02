import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";

import styles from "./list.module.css";

const List = ({ type, children }) => {
  switch (type) {
    case "category":
      return <CategoryList children={children} />;
    case "wrapping":
      return <WrappingList children={children} />;
    case "vertical":
      return <VerticalList children={children} />;
    case "list-with-intro":
      console.log("log children in list", children);
      return <ListWithIntro children={children} />;
    default:
      return <DefaultList children={children} />;
  }
};

const DefaultList = ({ children }) => (
  <ul className={cn(styles.root, styles.default)}>
    {React.Children.map(children, (child, i) => {
      return <li>{child}</li>;
    })}
  </ul>
);

const ListWithIntro = ({ children }) => (
  <div>
    <div className={styles.intro}>{children[0]}</div>
    <ul className={cn(styles.root, styles.default)}>
      {React.Children.map(children[1], (child, i) => {
        return <li>{child}</li>;
      })}
    </ul>
  </div>
);

const VerticalList = ({ children }) => (
  <ul className={cn(styles.root, styles.vertical)}>
    {React.Children.map(children, (child, i) => {
      return <li>{child}</li>;
    })}
  </ul>
);

const WrappingList = ({ children }) => (
  <ul className={cn(styles.root, styles.wrapping)}>
    {React.Children.map(children, (child, i) => {
      return <li>{child}</li>;
    })}
  </ul>
);

const CategoryList = ({ children }) => (
  <ul className={cn(styles.root, styles.categories)}>
    {React.Children.map(children, (child, i) => {
      return <li>{child}</li>;
    })}
  </ul>
);

export default List;
