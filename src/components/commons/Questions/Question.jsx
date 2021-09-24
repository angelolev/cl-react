import React from "react";

const Question = ({ title, comments, likes, link }) => {
  const handleAnswer = () => {
    console.log("agregar rpta");
  };

  return (
    <div className="question">
      <h4 className="question__title">{title}</h4>
      <span className="question__comments">
        <i className="icon icon-comment"></i> {comments}
      </span>
      <span className="question__likes">
        <i className="icon icon-like"></i> {likes}
      </span>
      {/* <a className="question__join" href="/">
        Únete a la discusion
      </a> */}
      <button
        style={{ backgroundColor: "red" }}
        type="button"
        onClick={handleAnswer}
      >
        Responder
      </button>
    </div>
  );
};

export default Question;
