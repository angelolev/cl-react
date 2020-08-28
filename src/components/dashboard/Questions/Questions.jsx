import React from "react";
//import Question from "./Question";

const Questions = (props) => {
  //   const questions = [
  //     {
  //       id: 1,
  //       title: "How to learn and practice coding efficiently",
  //       image: "./images/article.png",
  //       link:
  //         "https://dev.to/magoo763/how-to-learn-and-practice-coding-efficiently-24nn",
  //     },
  //     {
  //       id: 2,
  //       title: "18+ CSS book effect for your projects",
  //       image: "./images/article.png",
  //       link: "https://csshint.com/css-book-effect/",
  //     },
  //     {
  //       id: 3,
  //       title: "Static Readme Regeneration",
  //       image: "./images/article.png",
  //       link: "https://aralroca.com/blog/static-readme-regeneration",
  //     },
  //     {
  //       id: 4,
  //       title: "Small Tips to Write Better React Code",
  //       image: "./images/article.png",
  //       link:
  //         "https://livecodestream.dev/post/2020-07-28-small-tips-to-write-better-react-code",
  //     },
  //     {
  //       id: 5,
  //       title: "25 Examples of Engaging 404 Error Pages",
  //       image: "./images/article.png",
  //       link:
  //         "https://qodeinteractive.com/magazine/engaging-404-error-page-designs/",
  //     },
  //   ];

  return (
    <div className="questions">
      <h3>Preguntas</h3>
      <div className="question">
        <h4 className="question__title">¿Qué estas aprendiendo hoy?</h4>
        <span className="question__comments">
          <i className="icon icon-comment"></i> 40
        </span>
        <span className="question__likes">
          <i className="icon icon-like"></i> 20
        </span>
        <a className="question__join" href="/">
          Únete a la discusion
        </a>
      </div>
      <div className="question">
        <h4 className="question__title">¿Qué estas aprendiendo hoy?</h4>
        <span className="question__comments">
          <i className="icon icon-comment"></i> 40
        </span>
        <span className="question__likes">
          <i className="icon icon-like"></i> 20
        </span>
        <a className="question__join" href="/">
          Únete a la discusion
        </a>
      </div>
      <div className="question">
        <h4 className="question__title">¿Qué estas aprendiendo hoy?</h4>
        <span className="question__comments">
          <i className="icon icon-comment"></i> 40
        </span>
        <span className="question__likes">
          <i className="icon icon-like"></i> 20
        </span>
        <a className="question__join" href="/">
          Únete a la discusion
        </a>
      </div>
    </div>
  );
};

export default Questions;
