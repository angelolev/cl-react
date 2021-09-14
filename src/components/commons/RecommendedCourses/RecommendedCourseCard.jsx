import React from "react";

const RecommendedCourseCard = (props) => {
  const { status, image, title, description, link, releaseDate } = props.course;

  let courseCardClasses = "recommended-courses__course";
  const statusName = !status ? "Muy pronto" : "";

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
          <a className="yellow" href={link}>
            Ir al Curso
          </a>
        </div>
      ) : (
        false
      )}
    </div>
  );
};

export default RecommendedCourseCard;
