import React, { useEffect, useState } from "react";
import Articles from "../commons/Articles/Articles";
import Questions from "../commons/Questions/Questions";
import Membership from "../dashboard/Membership/Membership";
import { Link } from "react-router-dom";
import Certification from "../dashboard/Certification/Certification";
import { getLesson } from "../../services/lessons-service";
import {
  addQuestionOnLesson,
  getLessonQuestionsList,
} from "../../services/questions-service";
import { addLikeQuestion } from "../../services/likes-service";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import SessionVideoSkeleton from "../commons/Skeletons/SessionVideoSkeleton";
import { generateId } from "../../utils";

const SessionVideo = (props) => {
  const dispatch = useDispatch();
  const currentLesson = useSelector((state) => state.lessons.currentLesson);
  const questions = useSelector((state) => state.questions.lessonQuestions);
  const user = useSelector((state) => state.auth.uid);
  const lesson = currentLesson?.lesson;
  const { group, lessonId } = useParams();

  useEffect(() => {
    dispatch(getLesson(lessonId));
    dispatch(getLessonQuestionsList(lessonId));

    window.scrollTo(0, 0);
  }, []);

  const handleLikeQuestion = (questionId) => {
    // const newLike = {
    //   uid: user,
    //   enabled: true,
    //   question_id: questionId,
    //   description: "test",
    // };

    console.log("like", questionId);
  };

  const handleAddNewComment = () => {
    console.log("comentar");
  };

  const handleAddNewQuestion = (questionTitle) => {
    const questionId = generateId()();
    const newQuestion = {
      id: questionId,
      title: questionTitle,
      lesson_id: lessonId,
    };

    dispatch(addQuestionOnLesson(newQuestion));
  };

  return (
    <section className="lesson__video">
      <div className="container"></div>
      <div className="lesson__video-media">
        {lesson ? (
          <>
            {/* <video
              className="video"
              src={session[0].urlVideo}
              controls="controls"
              controlsList="nodownload"
            ></video> */}
            <iframe
              width="100%"
              height="496"
              src={lesson?.urlVideo}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="lesson__video-info">
              <h2>{lesson?.title}</h2>
              <p>{lesson?.description}</p>
            </div>
            <div className="lesson__video-link">
              <Link to={`/clases/${group}`}>Regresar</Link>
            </div>
            {lesson ? (
              <>
                <Articles lessonId={lessonId} />
              </>
            ) : null}
          </>
        ) : (
          <SessionVideoSkeleton />
        )}
      </div>
      <div className="lesson__video-resources">
        {lesson ? (
          <>
            <Questions
              questions={questions}
              addNewQuestion={handleAddNewQuestion}
              handleLikeQuestion={handleLikeQuestion}
              handleAddNewComment={handleAddNewComment}
            />
          </>
        ) : (
          <h3>Cargando</h3>
        )}

        <Membership />
        {/* <Certification /> */}
      </div>
    </section>
  );
};

export default SessionVideo;
