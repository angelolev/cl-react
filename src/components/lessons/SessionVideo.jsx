import React, { useEffect } from "react";
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
  const currentSession = useSelector((state) => state.lessons.currentLesson);
  const { link, group } = useParams();
  const actualSession = currentSession?.lesson[0];

  useEffect(() => {
    dispatch(getLesson(link));
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="lesson__video">
      <div className="container"></div>
      <div className="lesson__video-media">
        {actualSession ? (
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
              src={actualSession?.urlVideo}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="lesson__video-info">
              <h2>{actualSession?.title}</h2>
              <p>{actualSession?.description}</p>
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
        {actualSession ? (
          <>
            <Articles id={actualSession?.id} />
          </>
        ) : null}
        {/* <Questions questions={sessionQuestions} /> */}
        <Membership />
        <Certification />
      </div>
    </section>
  );
};

export default SessionVideo;
