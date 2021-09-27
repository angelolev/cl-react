import React, { useState } from "react";
import Question from "./Question";
import Button from "../../elements/Button/Button";
import TextArea from "../../elements/TextArea/TextArea";

const Questions = ({ questions, addNewQuestion, handleLikeQuestion }) => {
  const [newQuestion, setNewQuestion] = useState("");

  const handleAddNewQuestion = (event) => {
    event.preventDefault();
    addNewQuestion(newQuestion);
  };

  return (
    <div className="questions">
      <div className="questions__title">
        <h3>Preguntas de la clase</h3>
        <p>Tienes alguna duda? Déjala aquí:</p>
      </div>
      <div className="questions__form-new-question">
        <form onSubmit={handleAddNewQuestion}>
          <TextArea
            name="question"
            rows={5}
            cols={50}
            handleOnChange={(event) => setNewQuestion(event.target.value)}
          />
          <Button elementClass="btn yellow" elementText="Agregar" />
        </form>
      </div>
      <div className="questions__list">
        {questions?.map((question) => {
          return (
            <Question
              key={question.id}
              title={question.title}
              comments={question.comments?.length}
              likes={question.likes}
              handleLikeQuestion={() => handleLikeQuestion(question.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Questions;
