import React from "react";
import htmlImage from "./html5.png";
import cssImage from "./css.png";
import jsImage from "./js.png";

const verifyType = (type) => {
  switch (type) {
    case "html":
      return htmlImage;
    case "css":
      return cssImage;
    case "js":
      return jsImage;
    default:
      break;
  }
};

const Session = (props) => {
  const { title, type, description, link } = props;

  return (
    <div className="session">
      <div className="session__image">
        <img src={verifyType(type)} alt="" />
      </div>
      <div className="session__description">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className="session__link">
        <a href={link}>Ver Ahora</a>
      </div>
    </div>
  );
};

export default Session;
