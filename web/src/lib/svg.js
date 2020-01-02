import React from "react";

export function getWaves(svgSelection, cssClass, fill, fillOpacity) {
  switch (svgSelection) {
    case "1":
      return (
        <svg className={cssClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={fill}
            fillOpacity={fillOpacity}
            d="M0,224L80,213.3C160,203,320,181,480,186.7C640,192,800,224,960,245.3C1120,267,1280,277,1360,282.7L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      );
    case "2":
      return (
        <svg className={cssClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={fill}
            fillOpacity={fillOpacity}
            d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,117.3C672,107,768,117,864,128C960,139,1056,149,1152,160C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      );
    case "3":
      return (
        <svg className={cssClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={fill}
            fillOpacity={fillOpacity}
            d="M0,160L48,160C96,160,192,160,288,144C384,128,480,96,576,106.7C672,117,768,171,864,176C960,181,1056,139,1152,133.3C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      );
    case "4":
      return (
        <svg className={cssClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={fill}
            fillOpacity={fillOpacity}
            d="M0,224L48,224C96,224,192,224,288,224C384,224,480,224,576,234.7C672,245,768,267,864,261.3C960,256,1056,224,1152,202.7C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      );
    case "5":
      return (
        <svg className={cssClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={fill}
            fillOpacity={fillOpacity}
            d="M0,96L48,90.7C96,85,192,75,288,101.3C384,128,480,192,576,208C672,224,768,192,864,197.3C960,203,1056,245,1152,229.3C1248,213,1344,139,1392,101.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      );
    case "6":
      return (
        <svg className={cssClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={fill}
            fillOpacity={fillOpacity}
            d="M0,224L48,202.7C96,181,192,139,288,138.7C384,139,480,181,576,176C672,171,768,117,864,128C960,139,1056,213,1152,208C1248,203,1344,117,1392,74.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      );
    case "7":
      return (
        <svg className={cssClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={fill}
            fillOpacity={fillOpacity}
            d="M0,256L60,250.7C120,245,240,235,360,229.3C480,224,600,224,720,208C840,192,960,160,1080,160C1200,160,1320,192,1380,208L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      );
    case "8":
      return (
        <svg className={cssClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={fill}
            fillOpacity={fillOpacity}
            d="M0,256L60,229.3C120,203,240,149,360,128C480,107,600,117,720,101.3C840,85,960,43,1080,53.3C1200,64,1320,128,1380,160L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      );
    case "9":
      return (
        <svg className={cssClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={fill}
            fillOpacity={fillOpacity}
            d="M0,64L80,80C160,96,320,128,480,165.3C640,203,800,245,960,229.3C1120,213,1280,139,1360,101.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      );
    case "10":
      return (
        <svg className={cssClass} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={fill}
            fillOpacity={fillOpacity}
            d="M0,32L34.3,48C68.6,64,137,96,206,96C274.3,96,343,64,411,69.3C480,75,549,117,617,133.3C685.7,149,754,139,823,149.3C891.4,160,960,192,1029,181.3C1097.1,171,1166,117,1234,106.7C1302.9,96,1371,128,1406,144L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
      );
    default:
      return <p>Missing svg information</p>;
  }
}
