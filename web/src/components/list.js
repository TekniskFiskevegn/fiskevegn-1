import { Link } from "gatsby";
import React from "react";
import { cn } from "../lib/helpers";
import Intro from "./intro";
import ListTeaser from "./news-teaser";
import Item from "./item";
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

// A list takes nodes [] and style {}

const List = ({ nodes, style = "", listItemStyle = "" }) => {
  if (!nodes) {
    return null;
  }

  const customStyle = getCustomStyle(style);

  return (
    <div className={styles.root}>
      <ul className={cn(styles.ul, customStyle)}>
        {nodes &&
          nodes.map((node, i) => (
            <li key={i}>
              <Item key={node.id} {...node} style={listItemStyle} />
            </li>
          ))}
      </ul>
    </div>
  );
};

const getCustomStyle = style => {
  const foo = "";

  return foo;
};

List.DefaultProps = {
  style: "",
  listItemStyle: "pop"
};

// const List = ({
//   oneWhole,
//   oneHalf,
//   oneThird,
//   oneFourth,
//   flexAuto,
//   children,
//   nodes,
//   browseMoreHref,
//   browseMoreTitle,
//   style
// }) => {
//   const customStyle = getStyling(style);
//   const extra = (
//     <div className={utils.textRight}>
//       <Link to="/archive">{browseMoreTitle}</Link>
//     </div>
//   );

//   if (oneHalf) {
//     console.log("one half", children, nodes);
//     return (
//       <div className={styles.root}>
//         <ul className={cn(styles.ul, styles.oneHalf, customStyle)}>
//           {children &&
//             React.Children.map(children, (child, i) => {
//               return <li key={i}>{child}</li>;
//             })}
//           {nodes &&
//             nodes.map((node, i) => (
//               <li>
//                 <ListTeaser key={node.id} {...node} />
//               </li>
//             ))}
//         </ul>
//         {browseMoreHref && (
//           <div className={utils.textRight}>
//             <Link to="/archive">More news</Link>
//           </div>
//         )}
//       </div>
//     );
//   }
//   if (oneFourth) {
//     console.log("one fourth", children, nodes);
//     return (
//       <div className={styles.root}>
//         <ul className={cn(styles.ul, styles.oneFourth, customStyle)}>
//           {children &&
//             React.Children.map(children, (child, i) => {
//               return <li key={i}>{child}</li>;
//             })}
//           {nodes &&
//             nodes.map((node, i) => (
//               <li>
//                 <ListTeaser key={node.id} {...node} />
//               </li>
//             ))}
//         </ul>
//         {browseMoreHref && (
//           <div className={utils.textRight}>
//             <Link to="/archive">More news</Link>
//           </div>
//         )}
//       </div>
//     );
//   }

//   return (
//     <div className={styles.root}>
//       <ul className={cn(styles.ul, customStyle)}>
//         {children &&
//           React.Children.map(children, (child, i) => {
//             return <li key={i}>{child}</li>;
//           })}
//         {nodes &&
//           nodes.map((node, i) => (
//             <li>
//               <ListTeaser key={node.id} {...node} />
//             </li>
//           ))}
//       </ul>
//       {browseMoreHref && (
//         <div className={utils.textRight}>
//           <Link to="/archive">More news</Link>
//         </div>
//       )}
//     </div>
//   );
// };

const getStyling = ({ ...style }) => {
  console.log("getStyling", style);
  const { spaceAround, justifyCenter, alignCenter, noGap, smallGap, opacity, oddBorder } = style;
  const styling = cn(
    spaceAround ? styles.spaceAround : "",
    justifyCenter ? styles.justifyCenter : "",
    // alignCenter ? styles.alignCenter : "",
    noGap ? styles.noGap : "",
    // smallGap ? styles.smallGap : "",
    opacity ? styles.opacity : "",
    oddBorder ? styles.oddBorder : ""
  );
  return styling;
};

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

// const NewsList = ({ title, nodes, browseMoreHref }) => {
//   return (
//     <div className={styles.root}>
//       <Intro title={title} />
//       <ul className={cn(styles.ul, styles.newsList)}>
//         {nodes &&
//           nodes.map(node, i => (
//             <li key={node.id}>
//               <NewsTeaser {...node} />
//             </li>
//           ))}
//       </ul>
//       {browseMoreHref && (
//         <div className={utils.textRight}>
//           <Link to="/archive">More news</Link>
//         </div>
//       )}
//     </div>
//   );
// };

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
