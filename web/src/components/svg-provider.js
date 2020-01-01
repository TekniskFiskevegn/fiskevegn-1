import React from "react";

import { cn } from "../lib/helpers";
import styles from "./svg-provider.module.css";
import Icon from "./icon";

const wave = (shapeNumber, shapePosition = "bottom") => {
  const waveClass = cn(styles.wave, shapePosition === "top" ? styles.waveTop : styles.waveBottom);

  switch (shapeNumber) {
    case "1":
      return (
        <svg className={waveClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#F3F4F5"
            fillOpacity="1"
            d="M0,224L80,213.3C160,203,320,181,480,186.7C640,192,800,224,960,245.3C1120,267,1280,277,1360,282.7L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      );
    case "2":
      return (
        <svg className={waveClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#F3F4F5"
            fillOpacity="1"
            d="M0,288L60,288C120,288,240,288,360,250.7C480,213,600,139,720,117.3C840,96,960,128,1080,122.7C1200,117,1320,75,1380,53.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      );
    case "3":
      return (
        <svg className={waveClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#F3F4F5"
            fillOpacity="1"
            d="M0,192L48,208C96,224,192,256,288,250.7C384,245,480,203,576,181.3C672,160,768,160,864,144C960,128,1056,96,1152,112C1248,128,1344,192,1392,224L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      );
    case "4":
      return (
        <svg className={waveClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#F3F4F5"
            fillOpacity="1"
            d="M0,160L80,149.3C160,139,320,117,480,101.3C640,85,800,75,960,74.7C1120,75,1280,85,1360,90.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      );
    default:
      return (
        <svg className={waveClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#F3F4F5"
            fillOpacity="1"
            d="M0,288L60,288C120,288,240,288,360,250.7C480,213,600,139,720,117.3C840,96,960,128,1080,122.7C1200,117,1320,75,1380,53.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      );
  }
};

const angle = ({ shapeNumber }) => {
  return <p>angle</p>;
};

const circle = ({ shapeNumber }) => {
  return <p>circle</p>;
};

const icon = () => {
  return <p>circle</p>;
};

const SvgProvider = ({ shapeType = null, shapePosition, shapeNumber = 1, iconName = null }) => {
  switch (shapeType) {
    case "wave":
      return wave(shapeNumber, shapePosition);
    case "angle":
      return angle(shapeNumber);
    case "circle":
      return circle(shapeNumber);
    case "icon":
      return icon(iconName);
    default:
      return <p>Please specify desired props for SvgProvider</p>;
  }
};

export default SvgProvider;
