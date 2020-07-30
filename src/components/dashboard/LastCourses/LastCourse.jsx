import React from "react";

const LastCourse = (props) => (
  <div className="last-course">
    <img src={props.imageSrc} alt="" />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </div>
);

export default LastCourse;
