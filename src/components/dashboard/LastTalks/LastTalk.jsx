import React from "react";

const LastTalk = (props) => (
  <div className="last-talk">
    <img src={props.image} alt="" />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </div>
);

export default LastTalk;
