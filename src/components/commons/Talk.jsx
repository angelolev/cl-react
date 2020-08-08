import React from "react";

const Talk = (props) => {
  const talkButtonText = "Agregar a calendario";

  return (
    <div className="talk">
      <div className="talk__image">
        <img src={props.image} alt="" />
      </div>
      <div className="talk__description">
        <h3>{props.description}</h3>
        <p>{props.date}</p>
        <a className="talk__link" href={props.link}>
          {talkButtonText}
        </a>
      </div>
    </div>
  );
};

export default Talk;
