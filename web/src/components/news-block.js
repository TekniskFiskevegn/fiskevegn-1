import { Link } from "gatsby";
import React from "react";
import BlockIntro from "./block-intro";
import NewsTeaser from "./news-teaser";

import utils from "./utils.module.css";
import styles from "./news-block.module.css";
import { responsiveTitle1 } from "./typography.module.css";

function NewsBlock(props) {
  return (
    <div className={utils.verticalFlow}>
      <div className={styles.root}>
        <BlockIntro title={props.title} />

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
    </div>
  );
}

NewsBlock.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: ""
};

export default NewsBlock;
