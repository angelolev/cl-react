import React, { useEffect, useState } from "react";
import Articles from "../commons/Articles/Articles";
import Questions from "../commons/Questions/Questions";
import Membership from "../dashboard/Membership/Membership";
import { Link } from "react-router-dom";
import Certification from "../dashboard/Certification/Certification";
import { getLesson, addQuestionOnLesson } from "../../store/actions/lessons";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import SessionVideoSkeleton from "../commons/Skeletons/SessionVideoSkeleton";
import { db } from "../../services/firebase";
import firebase from "firebase";
import { generateId } from "../../utils";

const SessionVideo = (props) => {
  const dispatch = useDispatch();
  const currentLesson = useSelector((state) => state.lessons.currentLesson);
  const lesson = currentLesson?.lesson;
  const { group, id } = useParams();

  // const initialQuestions = [
  //   {
  //     id: "1",
  //     title: "pregunta 1",
  //     comments: [],
  //     likes: 0,
  //     link: "http://link",
  //   },
  //   {
  //     id: "2",
  //     title: "pregunta 2",
  //     comments: [],
  //     likes: 0,
  //     link: "http://link",
  //   },
  // ];
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    dispatch(getLesson(id));
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setQuestions(lesson?.questions);
  }, [lesson]);

  const handleLikeQuestion = (questionId) => {
    const tempArray = questions.map((item) => {
      if (item.id === questionId) {
        item.likes = item.likes + 1;

        return item;
      } else {
        return item;
      }
    });

    setQuestions(tempArray);
  };

  const handleAddNewQuestion = (questionTitle) => {
    const questionId = generateId()();
    const newQuestion = {
      id: questionId,
      title: questionTitle,
      comments: [],
      likes: 0,
    };

    dispatch(addQuestionOnLesson(newQuestion, id));

    const temporalQuestions = [...questions];
    temporalQuestions.push(newQuestion);
    setQuestions(temporalQuestions);
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
                <Articles id={lesson?.id} />
              </>
            ) : null}
          </>
        ) : (
          <SessionVideoSkeleton />
        )}
      </div>
      <div className="lesson__video-resources">
        {/* {lesson ? (
          <>
            <Articles id={lesson?.id} />
          </>
        ) : null} */}
        {lesson ? (
          <>
            <Questions
              questions={questions}
              addNewQuestion={handleAddNewQuestion}
              handleLikeQuestion={handleLikeQuestion}
            />
          </>
        ) : (
          <h3>Cargando</h3>
        )}

        <Membership />
        <Certification />
      </div>
    </section>
  );
};

export default SessionVideo;
