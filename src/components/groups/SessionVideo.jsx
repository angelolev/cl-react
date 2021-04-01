import React, { useState, useEffect } from "react";
import Articles from "../commons/Articles/Articles";
import Questions from "../commons/Questions/Questions";
import Membership from "../dashboard/Membership/Membership";
import { db } from "../../services/firebase";
import Loader from "../loader/Loader";
import { Link } from "react-router-dom";
import Certification from "../dashboard/Certification/Certification";

const sessionQuestions = {
  title: "Preguntas de la clase",
  questionsList: [
    {
      id: 0,
      title: "Que estas aprendiendo hoy?",
      comments: 20,
      likes: 3,
      link: "/que-estas-aprendiendo-hoy",
    },
    {
      id: 1,
      title: "Que estas aprendiendo hoy?",
      comments: 20,
      likes: 3,
      link: "/que-estas-aprendiendo-hoy",
    },
    {
      id: 2,
      title: "Que estas aprendiendo hoy?",
      comments: 20,
      likes: 3,
      link: "/que-estas-aprendiendo-hoy",
    },
  ],
};

const SessionVideo = (props) => {
  const [session, setSession] = useState([]);
  const link = props.match.params.link;
  const group = props.match.params.group;

  useEffect(() => {
    db.collection("html")
      .get()
      .then((querySnapshot) => {
        const loadedSessions = [];
        querySnapshot.forEach((doc) => {
          const currentDoc = doc.data();
          currentDoc.id = doc.id;
          loadedSessions.push(currentDoc);
        });
        const loadedSession = loadedSessions.filter(
          (session) => session.link === link && session.group === group
        );
        setSession(loadedSession);
      });
  }, []);

  const formatTitle = (link, title) => {
    return link[0].toUpperCase() + link.slice(1) + ": " + title;
  };

  return (
    <section className="session-video">
      <div className="container"></div>
      <div className="session-video__media">
        {session[0] ? (
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
              src={session[0].urlVideo}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="session-video__info">
              <h2>{session[0].title}</h2>
              <p>{session[0].description}</p>
            </div>
            <div className="session-video__link">
              <Link to={`/clases`}>Regresar</Link>
            </div>
          </>
        ) : (
          <Loader />
        )}
      </div>
      <div className="session-video__resources">
        {session[0] ? (
          <>
            <Articles id={session[0].id} />
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
