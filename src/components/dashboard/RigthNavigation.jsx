import React from "react";
import Articles from "../commons/Articles/Articles";
import Questions from "../commons/Questions/Questions";

const dashboardArticles = {
  heading: "Ultimos articulos",
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

const dashboardQuestions = {
  title: "Ultimas preguntas",
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

const RightNavigation = () => {
  return (
    <aside className="right-navigation">
      <Articles articles={dashboardArticles} />
      <Questions questions={dashboardQuestions} />
    </aside>
  );
};

export default RightNavigation;
