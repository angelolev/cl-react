import React from "react";
import htmlImage from "./html5.png";
import cssImage from "./css.png";
import jsImage from "./js.png";
import responsiveImage from "./responsive.png";
import flexboxImage from "./flexbox.png";
import { Link } from "react-router-dom";

const verifyType = (type) => {
  switch (type) {
    case "html":
      return htmlImage;
    case "css":
      return cssImage;
    case "js":
      return jsImage;
    case "responsive":
      return responsiveImage;
    case "flexbox":
      return flexboxImage;
    default:
      break;
  }
};

const formatTitle = (link, title) => {
  return link[0].toUpperCase() + link.slice(1) + ": " + title;
};

const Session = (props) => {
  const { title, type, description, group, link } = props;

  return (
    <div className="group-session">
      <div className="group-session__image">
        <img src={verifyType(type)} alt="" />
      </div>
      <div className="group-session__description">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className="group-session__link">
        <Link to={`/clases/${group}/${link}`}>Ver Ahora</Link>
      </div>
    </div>
  );
};

export default Session;
