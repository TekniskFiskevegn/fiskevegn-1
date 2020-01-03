import React from "react";
import { Parallax, Background } from "react-parallax";

import { buildImageObj, cn } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlockIntro from "../components/block-intro";
import List from "../components/list";
import utils from "./utils.module.css";
import styles from "./contact-block.module.css";
import { responsiveTitle1 } from "../components/typography.module.css";

const ContactBlock = props => {
  console.log("promoted-block.js", props);

  const { title, tinyTitle, description, image, textTitle, text} = props;

  return (
    <div className={styles.root}>
      <BlockIntro marginBottom={true} title={title} tinyTitle={tinyTitle} text={description} textTitle={textTitle} image={image} />
      <div className={styles.content}>
        <div className={cn(styles.imageContent, styles.imageBg)} style={{backgroundImage: `url(${image})`}}>
          
          {/* <img src="/office.jpg" alt="" /> */}
        </div>
        <div
          className={cn(
            styles.textContent
          )}
        >
          <h3 className={styles.title}>{textTitle}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores porro iste sint
            suscipit excepturi aliquid a laudantium nihil rerum nisi. Saepe pariatur at atque esse
            accusamus repellendus exercitationem iusto odio!
          </p>
          <List type="justifiedCenter">

          <a href="" className={utils.callToActionLink}>
            Mail
          </a>
          <a href="" className={utils.callToActionLink}>
            Map
          </a>
          </List>
        </div>
      </div>
    </div>
  );
};

export default ContactBlock;
