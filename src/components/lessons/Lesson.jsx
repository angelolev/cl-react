import React from "react";
import { Link } from "react-router-dom";
import { getCourseImage } from "../../utils";

const Lesson = (props) => {
  const { title, type, description, group, link } = props;

  return (
    <div className="lesson">
      <div className="lesson__image">
        <img src={getCourseImage(type)} alt="" />
      </div>
      <div className="lesson__description">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className="lesson__link">
        <Link to={`/clases/${group}/${link}`}>Ver Ahora</Link>
      </div>
    </div>
  );
};

export default Lesson;
