import React, { useEffect, useState } from "react";
import Hero from "../../components/commons/Hero/Hero";
import heroImage from "../../components/lessons/studygroup.svg";
import { useDispatch, useSelector } from "react-redux";
import { getQuestion } from "../../services/questions-service";
import { useParams } from "react-router";
import { generateId } from "../../utils";
import {
  addCommentToQuestion,
  getQuestionCommentsList,
} from "../../services/comments-service";
import FormAddComment from "./FormAddComment";

const LessonQuestion = () => {
  const dispatch = useDispatch();
  const { questionId } = useParams();
  const question = useSelector((state) => state.questions.currentQuestion);
  const comments = useSelector((state) => state.comments.commentsList);
  const user = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getQuestion(questionId));
    dispatch(getQuestionCommentsList(questionId));
  }, []);

  const handleAddNewComment = (value) => {
    const commentId = generateId()();
    const comment2 = {
      id: commentId,
      description: value.comment,
      question_id: questionId,
    };

    dispatch(addCommentToQuestion(comment2));
  };

  return (
    <>
      <Hero title="Ayuda a la comunidad respondiendo dudas" image={heroImage} />
      <section className="question-item">
        <h2>{question?.title}</h2>
        <p>
          Comenta tu respuesta para que otros miembros de la comunidad puedan
          resolver sus dudas.
        </p>
        <div>
          {comments?.map((comment) => {
            return (
              <div className="question-item__comment">
                <div className="question-item__user">
                  <img src={user.photoURL} alt="" />
                  <h3>{user.displayName}</h3>
                </div>
                <p className="question-item__description" key={comment.id}>
                  {comment.description}
                </p>
              </div>
            );
          })}
        </div>
        <FormAddComment addNewComment={handleAddNewComment} />
      </section>
    </>
  );
};

export default LessonQuestion;
