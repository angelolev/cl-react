import React from "react";

const LastTalk = (props) => (
  <div className="last-talk">
    <img src={props.image} alt="" />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
    <p>{props.date}</p>
    <a className="talk__link" href={props.link}>
      "Agregar a calendario"
    </a>
  </div>
);

export default LastTalk;
