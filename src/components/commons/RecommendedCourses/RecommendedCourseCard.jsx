import React from "react";
import { Link } from "react-router-dom";
import Button from "../../elements/Button/Button";

const RecommendedCourseCard = (props) => {
  const { status, image, title, description, link, releaseDate } = props.course;

  let courseCardClasses = "recommended-courses__course";

  if (!status) {
    courseCardClasses += " unavailable";
  }

  return (
    <div className={courseCardClasses} id="courses">
      {!status ? (
        <span className="recommended-courses__course-status">
          {releaseDate}
        </span>
      ) : (
        <span className="recommended-courses__course-status available">
          Disponible
        </span>
      )}
      <div className="recommended-courses__course-image">
        <img src={`./images/${image}`} alt="" />
      </div>
      <div className="recommended-courses__course-title">
        <h3>{title}</h3>
      </div>
      <div className="recommended-courses__course-description">
        <p>{description}</p>
      </div>
      {status ? (
        <div className="recommended-courses__course-button">
          <Link className="yellow" to={link}>
            Ir al Curso
          </Link>
        </div>
      ) : (
        false
      )}
    </div>
  );
};

export default RecommendedCourseCard;
