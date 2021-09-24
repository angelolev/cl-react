import React, { useState } from "react";
import Question from "./Question";

const Questions = ({ questions, addNewQuestion }) => {
  const [newQuestion, setNewQuestion] = useState("");
  const handleAddNewQuestion = (event) => {
    event.preventDefault();
    addNewQuestion(newQuestion);
  };

  return (
    <div className="questions">
      <div className="questions__title">
        <h3>Preguntas de la clase</h3>
      </div>
      <div className="questions__new-question">
        <form onSubmit={handleAddNewQuestion}>
          <input
            type="text"
            name="new-question"
            id=""
            onChange={(event) => setNewQuestion(event.target.value)}
          />
          <button>Agregar pregunta</button>
        </form>
      </div>
      <div className="questions__list">
        {questions?.map((question) => {
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
