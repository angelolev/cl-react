import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLessonQuestionCommentsList } from "../../../services/comments-service";
import { getLessonQuestionLikesList } from "../../../services/likes-service";

const Question = ({ id, title, handleLikeQuestion }) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.commentsList);
  // const likes = useSelector((state) => state.likes.likesList);
  const questionComments = comments
    .map((item) => item.filter((obj) => obj.question_id == id))
    .filter(String)[0];

  // const questionLikes = likes
  //   .map((item) => item.filter((obj) => obj.question_id == id))
  //   .filter(String)[0];

  useEffect(() => {
    dispatch(getLessonQuestionCommentsList(id));
    // dispatch(getLessonQuestionLikesList(id));
  }, []);

  return (
    <div className="question">
      <h4 className="question__title">{title}</h4>
      <div className="question__social">
        <div className="question__comments">
          <i className="icon icon-comment"></i>{" "}
          <span>{questionComments?.length || 0}</span>
        </div>
        {/* <div className="question__likes" onClick={handleLikeQuestion}>
          <i className="icon icon-like"></i>{" "}
          <span>{questionLikes?.length}</span>
        </div> */}
      </div>

      <div className="question__button">
        <Link className="btn yellow" to={`/question/${id}`} target="_blank">
          Responder
        </Link>
        {/* <button className="btn yellow" type="button" onClick={handleAnswer}>
          Responder
        </button> */}
      </div>
    </div>
  );
};

export default Question;
