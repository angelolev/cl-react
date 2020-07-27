import React from "react";

const Talk = (props) => {
  const talkButtonText = "Agregar a calendario";

  return (
    <div class="talk">
      <div class="talk__image">
        <img src={props.image} alt="" />
      </div>
      <div class="talk__description">
        <h3>{props.description}</h3>
        <p>{props.date}</p>
        <a class="talk__link" href={props.link}>
          {talkButtonText}
        </a>
      </div>
    </div>
  );
};

export default Talk;
