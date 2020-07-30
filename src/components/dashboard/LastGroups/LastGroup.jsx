import React from "react";

const LastGroup = (props) => (
  <div className="group">
    <div className="group__image">
      <img src={props.imageSrc} alt="" />
    </div>
    <div className="group__description">
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  </div>
);

export default LastGroup;
