import React from "react";

const StudyGroup = (props) => (
  <div className="group">
    <div className="group__image">
      <img src={props.image} alt="" />
    </div>
    <div className="group__description">
      <h3>{[props.name]}</h3>
      <p>{props.description}</p>
      <a href="/">Ver Clases</a>
    </div>
  </div>
);

export default StudyGroup;
