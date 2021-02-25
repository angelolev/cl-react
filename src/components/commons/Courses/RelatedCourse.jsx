import React from "react";
import { Link } from "react-router-dom";

const RelatedCourse = (props) => {
  const { courseImage, courseName, students, link } = props;
  return (
    <Link to={link}>
      <div className="related-course">
        <div className="related-course__image">
          <img src={courseImage} alt="" />
        </div>
        <div className="related-course__title">
          <p>{courseName}</p>
          <p>
            <span className="icon icon-user"></span> {students} inscritos
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RelatedCourse;
