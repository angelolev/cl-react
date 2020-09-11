import React from "react";
import Question from "./Question";

const Questions = (props) => {
  const { title, questionsList } = props.questions;
  return (
    <div className="questions">
      <div className="questions__title">
        <h3>{title}</h3>
      </div>
      <div className="questions__list">
        {questionsList.map((question) => {
          return (
            <Question
              key={question.id}
              title={question.title}
              comments={question.comments}
              likes={question.likes}
              link={question.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Questions;
