import { Link } from "gatsby";
import React from "react";
import { cn } from "../lib/helpers";
import Intro from "./intro";
import NewsTeaser from "./news-teaser";
import styles from "./list.module.css";
import utils from "./utils.module.css";

// const List = ({ type, ...props }) => {
//   switch (type) {
//     case "fiftyfifty":
//       // two and two on large screens
//       return <FiftyFiftyList {...props} />;
//     case "nowrap":
//       // list items not wrapping under each other
//       return <NoWrapList {...props} />;
//     case "vertical":
//       // vertical list
//       return <VerticalList {...props} />;
//     case "justifiedCenter":
//       // vertical list
//       return <JustifiedCenterList {...props} />;
//     case "justifiedSpaceAround":
//       // vertical list
//       return <JustifiedSpaceAroundList {...props} />;
//     case "news":
//       // vertical list
//       return <NewsList {...props} />;
//     default:
//       return <DefaultList {...props} />;
//   }
// };

// a list should take children or nodes

const List = ({ oneWhole, oneHalf, oneThird, oneFourth, flexAuto, children, nodes, style }) => {
  const customStyle = getStyling(style);
  if (oneHalf) {
    console.log("oneHalf", children);
    return (
      <div className={styles.root}>
        <ul className={cn(styles.ul, styles.oneHalf, customStyle)}>
          {React.Children.map(children, (child, i) => {
            return <li key="foo">{child}</li>;
          })}
        </ul>
      </div>
    );
  }
};

const getStyling = ({ ...style }) => {
  console.log("getStyling", style);
  const { spaceAround, justifyCenter, alignCenter, noGap, smallGap, opacity, oddBorder } = style;
  const styling = cn(
    // spaceAround ? styles.spaceAround : "",
    // justifyCenter ? styles.justifyCenter : "",
    // alignCenter ? styles.alignCenter : "",
    noGap ? styles.noGap : ""
    // smallGap ? styles.smallGap : "",
    // opacity ? styles.opacity : "",
    // oddBorder ? styles.oddBorder : ""
  );
  return styling;
};

// const oneHalf = (
//   <div className={styles.root}>
//     <ul
//       className={cn(
//         styles.ul,
//         styles.fiftyFiftyList,
//         noGap ? styles.noGap : "",
//         oddBorder ? styles.oddBorder : ""
//       )}
//     >
//       {React.Children.map(children, (child, i) => {
//         return <li key={children.id}>{child}</li>;
//       })}
//     </ul>
//   </div>
// );

const DefaultList = ({ ...props }) => {
  const { children, smallGap } = props;
  return (
    <div styles={styles.root}>
      <ul className={cn(styles.ul, styles.defaultList, smallGap ? styles.smallGap : "")}>
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
        <div className={utils.textRight}>
          <Link to="/archive">More news</Link>
        </div>
      )}
    </div>
  );
};

const JustifiedCenterList = ({ ...props }) => {
  const { children, border, flexAuto } = props;
  return (
    <div styles={styles.root}>
      <ul
        className={cn(
          styles.ul,
          styles.justifiedCenterList,
          border ? styles.border : "",
          flexAuto ? styles.flexAuto : ""
        )}
      >
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
  const { children, thight } = props;
  return (
    <div className={styles.root}>
      <ul className={cn(styles.ul, styles.verticalList, thight ? styles.thight : "")}>
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
          return <li key={children.id}>{child}</li>;
        })}
      </ul>
    </div>
  );
};

export default List;
