import React from "react";
import Articles from "../commons/Articles/Articles";
import Questions from "../commons/Questions/Questions";

const sessionArticles = {
  heading: "Recursos de la clase",
  articlesList: [
    {
      id: 1,
      title: "How to learn and practice coding efficiently",
      link:
        "https://dev.to/magoo763/how-to-learn-and-practice-coding-efficiently-24nn",
    },
    {
      id: 2,
      title: "18+ CSS book effect for your projects",
      link: "https://csshint.com/css-book-effect/",
    },
    {
      id: 3,
      title: "Static Readme Regeneration",
      link: "https://aralroca.com/blog/static-readme-regeneration",
    },
    {
      id: 4,
      title: "Small Tips to Write Better React Code",
      link:
        "https://livecodestream.dev/post/2020-07-28-small-tips-to-write-better-react-code",
    },
    {
      id: 5,
      title: "25 Examples of Engaging 404 Error Pages",
      link:
        "https://qodeinteractive.com/magazine/engaging-404-error-page-designs/",
    },
  ],
};

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

const sessions = [
  {
    id: 0,
    type: "html",
    title: "Sesion 01 - Intro a HTML",
    description:
      "En esta sesion conversamos sobre temas generales de HTML para poder entender el proceso de renderizado en el browser",
    group: "html",
    link: "sesion01",
  },
  {
    id: 1,
    type: "css",
    title: "Sesion 02 - Intro a CSS",
    description:
      "En esta sesion conversamos sobre temas generales de HTML para poder entender el proceso de renderizado en el browser",
    group: "html",
    link: "sesion02",
  },
  {
    id: 2,
    type: "js",
    title: "Sesion 01 - Intro a JS",
    description:
      "En esta sesion conversamos sobre temas generales de HTML para poder entender el proceso de renderizado en el browser",
    group: "js",
    link: "sesion01",
  },
  {
    id: 3,
    type: "html",
    title: "Sesion 03 - HTML Basico",
    description:
      "En esta sesion conversamos sobre temas generales de HTML para poder entender el proceso de renderizado en el browser",
    group: "html",
    link: "sesion03",
  },
  {
    id: 4,
    type: "js",
    title: "Sesion 02 - Variables",
    description:
      "En esta sesion conversamos sobre temas generales de HTML para poder entender el proceso de renderizado en el browser",
    group: "js",
    link: "sesion02",
  },
  {
    id: 5,
    type: "css",
    title: "Sesion 04 - Etiquetas",
    description:
      "En esta sesion conversamos sobre temas generales de HTML para poder entender el proceso de renderizado en el browser",
    group: "html",
    link: "sesion04",
  },
];

const SessionVideo = (props) => {
  const link = props.match.params.link;
  const group = props.match.params.group;
  let session = {};
  console.log(link);
  console.log(group);

  const getSession = (link, group) => {
    session = sessions.filter(
      (session) => session.link === link && session.group === group
    );
    console.log(session);
  };

  getSession(link, group);

  return (
    <section className="session-video">
      <div className="container"></div>
      <div className="session-video__media">
        <video
          className="video"
          src="https://tzdigitalmediaqa001.blob.core.windows.net/umb-ms-media01/1010/medicare_supplement_changes_2020.mp4"
          controls="controls"
        ></video>
        <div className="session-video__info">
          <h2>{session[0].title}</h2>
          <p>{session[0].description}</p>
        </div>
      </div>
      <div className="session-video__resources">
        <Articles articles={sessionArticles} />
        <Questions questions={sessionQuestions} />
      </div>
    </section>
  );
};

export default SessionVideo;
