import React, { useEffect, useState } from "react";
import Articles from "../commons/Articles/Articles";
import Questions from "../commons/Questions/Questions";
import Membership from "../dashboard/Membership/Membership";
import { Link } from "react-router-dom";
import Certification from "../dashboard/Certification/Certification";
import { getLesson } from "../../store/actions/lessons";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import SessionVideoSkeleton from "../commons/Skeletons/SessionVideoSkeleton";

const SessionVideo = (props) => {
  const dispatch = useDispatch();
  const currentLesson = useSelector((state) => state.lessons.currentLesson);
  const lesson = currentLesson?.lesson[0];
  const { link, group } = useParams();

  const initialQuestions = [
    {
      id: "1",
      title: "pregunta 1",
      comments: [],
      likes: 0,
      link: "http://link",
    },
    {
      id: "2",
      title: "pregunta 2",
      comments: [],
      likes: 0,
      link: "http://link",
    },
  ];
  const [questions, setQuestions] = useState(initialQuestions);

  useEffect(() => {
    dispatch(getLesson(link));
    window.scrollTo(0, 0);
  }, []);

  const handleAddNewQuestion = (questionTitle) => {
    const newQuestion = {
      id: 4,
      title: questionTitle,
      comments: [],
      likes: 0,
      link: "http://link",
    };
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
          </>
        ) : (
          <SessionVideoSkeleton />
        )}
      </div>
      <div className="lesson__video-resources">
        {lesson ? (
          <>
            <Articles id={lesson?.id} />
          </>
        ) : null}
        <Questions
          questions={questions}
          addNewQuestion={handleAddNewQuestion}
        />
        <Membership />
        <Certification />
      </div>
    </section>
  );
};

export default SessionVideo;
