import React from "react";
import ArticleItem from "./ArticleItem";

const Articles = (props) => {
  const LastArticles = [
    {
      id: 1,
      title: "How to learn and practice coding efficiently",
      image: "./images/article.png",
      link:
        "https://dev.to/magoo763/how-to-learn-and-practice-coding-efficiently-24nn",
    },
    {
      id: 2,
      title: "18+ CSS book effect for your projects",
      image: "./images/article.png",
      link: "https://csshint.com/css-book-effect/",
    },
    {
      id: 3,
      title: "Static Readme Regeneration",
      image: "./images/article.png",
      link: "https://aralroca.com/blog/static-readme-regeneration",
    },
    {
      id: 4,
      title: "Small Tips to Write Better React Code",
      image: "./images/article.png",
      link:
        "https://livecodestream.dev/post/2020-07-28-small-tips-to-write-better-react-code",
    },
    {
      id: 5,
      title: "25 Examples of Engaging 404 Error Pages",
      image: "./images/article.png",
      link:
        "https://qodeinteractive.com/magazine/engaging-404-error-page-designs/",
    },
  ];

  return (
    <div className="articles">
      <div className="articles__title">
        <h3>Últimos Artículos</h3>
      </div>
      <div className="articles__list">
        {LastArticles.map((article) => {
          return <ArticleItem key={article.id} article={article} />;
        })}
      </div>
    </div>
  );
};

export default Articles;
