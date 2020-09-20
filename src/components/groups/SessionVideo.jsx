import React, { useState, useEffect } from "react";
import Articles from "../commons/Articles/Articles";
import Questions from "../commons/Questions/Questions";
import { db } from "../../services/firebase";
import Loader from "../loader/Loader";
import { Link } from "react-router-dom";

// const sessionArticles = {
//   heading: "Recursos de la clase",
//   articlesList: [
//     {
//       id: 1,
//       title: "How to learn and practice coding efficiently",
//       link:
//         "https://dev.to/magoo763/how-to-learn-and-practice-coding-efficiently-24nn",
//     },
//     {
//       id: 2,
//       title: "18+ CSS book effect for your projects",
//       link: "https://csshint.com/css-book-effect/",
//     },
//     {
//       id: 3,
//       title: "Static Readme Regeneration",
//       link: "https://aralroca.com/blog/static-readme-regeneration",
//     },
//     {
//       id: 4,
//       title: "Small Tips to Write Better React Code",
//       link:
//         "https://livecodestream.dev/post/2020-07-28-small-tips-to-write-better-react-code",
//     },
//     {
//       id: 5,
//       title: "25 Examples of Engaging 404 Error Pages",
//       link:
//         "https://qodeinteractive.com/magazine/engaging-404-error-page-designs/",
//     },
//   ],
// };

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
    db.collection("sessions")
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
            <video
              className="video"
              // src="https://tzdigitalmediaqa001.blob.core.windows.net/umb-ms-media01/1010/medicare_supplement_changes_2020.mp4"
              src={session[0].urlVideo}
              controls="controls"
              controlslist="nodownload"
            ></video>
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
        <Questions questions={sessionQuestions} />
      </div>
    </section>
  );
};

export default SessionVideo;
