import React from "react";

const Question = () => {
  return (
    <div className="question">
      <h4 className="question__title">¿Qué estas aprendiendo hoy?</h4>
      <span className="question__comments">
        <i className="icon icon-comment"></i> 40
      </span>
      <span className="question__likes">
        <i className="icon icon-like"></i> 20
      </span>
      <a className="question__join" href="/">
        Únete a la discusion
      </a>
    </div>
  );
};

export default Question;
