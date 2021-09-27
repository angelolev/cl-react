import React from "react";

const Question = ({ title, comments, likes, handleLikeQuestion }) => {
  const handleAnswer = () => {
    console.log("agregar rpta");
  };

  return (
    <div className="question">
      <h4 className="question__title">{title}</h4>
      <div className="question__social">
        <span className="question__comments">
          <i className="icon icon-comment"></i> {comments}
        </span>
        <span className="question__likes" onClick={handleLikeQuestion}>
          <i className="icon icon-like"></i> {likes}
        </span>
      </div>

      <div className="question__button">
        <button className="btn yellow" type="button" onClick={handleAnswer}>
          Responder
        </button>
      </div>
    </div>
  );
};

export default Question;
