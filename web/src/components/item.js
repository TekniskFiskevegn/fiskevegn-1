import { Link } from "gatsby";
import React from "react";
import { cn } from "../lib/helpers";
import styles from "./item.module.css";

const Item = ({ title, text, image, url, externalUrl, attention, subtleAttention, inYourFace }) => {
  const body = (
    <>
      <h3>{title}</h3>
      <span>{text}</span>
    </>
  );

  if (!url) {
    return (
      <div className={cn(styles.root, styles.defaultItem)} href="">
        {body}
      </div>
    );
  }
  return (
    <div
      className={cn(
        styles.root,
        styles.linkItem,
        attention ? styles.attention : "",
        subtleAttention ? styles.subtleAttention : "",
        inYourFace ? styles.inYourFace : ""
      )}
    >
      {externalUrl && (
        <a href={url} target="_blank">
          {body}
        </a>
      )}
      {!externalUrl && <Link to={`${url}`}>{body}</Link>}
    </div>
  );
};

export default Item;

// const Card = ({ title, text, url, imgSrc, externalUrl, styling = {} }) => {
//   const { flat, opacity, subtle, palette, borderRadius, gray } = styling;
//   if (!url) {
//     return null;
//   }

//   const body = (
//     <div>
//       <h3 className={cn(styles.title, subtle ? styles.subtle : "")}>{title}</h3>
//       <span>{text}</span>
//     </div>
//   );

//   // if img is needed
//   const img = (
//     <div className={cn(styles.wrapper)}>
//       <div className={styles.image}>
//         <img src={imgSrc} alt="" />
//       </div>
//       <div className={styles.text}>
//         <div className={styles.textSpace}>
//           <h3 className={styles.title}>{title}</h3>
//           <span>{text}</span>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div
//       className={cn(
//         styles.root,
//         flat ? styles.flat : "",
//         opacity ? styles.opacity : "",
//         borderRadius ? styles.borderRadius : "",
//         gray ? styles.gray : ""
//       )}
//     >
//       {externalUrl && (
//         <a className={cn(styles.link)} href={url} target="_blank">
//           {body}
//         </a>
//       )}
//       {!externalUrl && (
//         <Link className={cn(styles.link)} to={`${url}`}>
//           {body}
//         </Link>
//       )}
//     </div>
//   );
// };

// Card.DefaultProps = {
//   title: "",
//   text: "",
//   url: "",
//   imgSrc: "",
//   styling: {},
//   externalUrl: false
// };

// export default Card;
