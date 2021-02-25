import React from "react";

const CourseSession = (props) => {
  const { name, duration } = props;
  return (
    <div className="course-session">
      <div className="course-session__name">
        <p>
          <span className="icon icon-player"></span> {name}
        </p>
      </div>
      <div className="course-session__duration">
        <p>{duration}</p>
      </div>
    </div>
  );
};

export default CourseSession;