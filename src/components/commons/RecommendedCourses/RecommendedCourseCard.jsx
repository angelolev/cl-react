import React from "react";

const RecommendedCourseCard = (props) => {
  const { status, image, title, description, link } = props.course;

  let courseCardClasses = "recommended-course";
  const statusName = !status ? "Muy pronto" : "";

  if (!status) {
    courseCardClasses += " unavailable";
  }

  return (
    <div className={courseCardClasses} id="courses">
      {!status ? (
        <span className="recommended-course__status">{statusName}</span>
      ) : (
        false
      )}
      <div className="recommended-course__image">
        <img src={`./images/${image}`} alt="" />
      </div>
      <div className="recommended-course__title">
        <h3>{title}</h3>
      </div>
      <div className="recommended-course__description">
        <p>{description}</p>
      </div>
      {status ? (
        <div className="recommended-course__button">
          <a className="yellow" href={link}>
            Registrarme
          </a>
        </div>
      ) : (
        false
      )}
    </div>
  );
};

export default RecommendedCourseCard;
