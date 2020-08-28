import React from "react";

const LastTalk = (props) => (
  <div className="last-talk">
    <div className="last-talk__image">
      <img src={props.image} alt="" />
    </div>
    <div className="last-talk__description">
      <h3>{props.description}</h3>
      <p>{props.date}</p>
      <a className="talk__link" href={props.link}>
        "Agregar a calendario"
      </a>
    </div>
  </div>
);

export default LastTalk;
