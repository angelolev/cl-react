import React from "react";

const CourseCard = (props) => (
  <div className="course" id="courses">
    <div className="course__image">
      <img src={`./images/${props.course.image}`} alt="" />
    </div>
    <div className="course__title">
      <h3>{props.course.title}</h3>
    </div>
    <div className="course__description">
      <p>{props.course.description}</p>
    </div>
    <div className="course__button">
      <a className="yellow" href={props.course.link}>
        Registrarme
      </a>
    </div>
  </div>
);

export default CourseCard;
