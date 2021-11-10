import React, { useState } from "react";
import Question from "./Question";
import Button from "../../elements/Button/Button";
import TextArea from "../../elements/TextArea/TextArea";
import FormAddQuestion from "./FormAddQuestion";

const Questions = ({
  questions,
  addNewQuestion,
  handleLikeQuestion,
  handleAddNewComment,
}) => {
  const [newQuestion, setNewQuestion] = useState("");

  const handleAddNewQuestion = (value) => {
    addNewQuestion(value.question);
  };

  return (
    <div className="questions">
      <div className="questions__title">
        <h3>Preguntas de la clase</h3>
        <p>Tienes alguna duda? Déjala aquí:</p>
      </div>
      <div className="questions__form-new-question">
        <FormAddQuestion addNewQuestion={handleAddNewQuestion} />
      </div>
      <div className="questions__list">
        {questions?.map((question) => {
          return (
            <Question
              id={question.id}
              key={question.id}
              title={question.title}
              handleLikeQuestion={() => handleLikeQuestion(question.id)}
              handleAddNewComment={() => handleAddNewComment(question.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Questions;
