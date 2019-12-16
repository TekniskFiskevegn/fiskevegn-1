import { Link } from "gatsby";
import React from "react";
import NewsPreview from "./news-preview";

import utils from "./utils.module.css";
import styles from "./news-preview-grid.module.css";
import { responsiveTitle1 } from "./typography.module.css";

function NewsPreviewGrid(props) {
  return (
    <div className={utils.verticalFlow}>
      <div className={styles.root}>
        <div className={styles.firstRow}>
          {props.title && <h2 className={responsiveTitle1}>{props.title}</h2>}
        </div>
        <ul className={styles.grid}>
          {props.nodes &&
            props.nodes.map(node => (
              <li key={node.id}>
                <NewsPreview {...node} />
              </li>
            ))}
        </ul>
        {props.browseMoreHref && (
          <div className={styles.browseMoreNav}>
            <Link to={props.browseMoreHref}>Visit our news archive</Link>
          </div>
        )}
      </div>
    </div>
  );
}

NewsPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: ""
};

export default NewsPreviewGrid;
