import React from "react";
import RecommendedCourseCard from "../RecommendedCourses/RecommendedCourseCard";

const RecommendedCourses = (props) => (
  <div className="recommended-courses">
    <div className="recommended-courses__content">
      <div className="recommended-courses__intro">
        <h2 id="description">¿Qué es lo que hacemos?</h2>
        <p>
          Compartimos conocimiento(talleres, workshops, cursos, etc) apoyando a
          los profesionales que inician en el mundo del desarrollo web.
        </p>
      </div>
      {props.courses.map((course) => (
        <RecommendedCourseCard course={course} key={course.id} />
      ))}
    </div>
  </div>
);

export default RecommendedCourses;
