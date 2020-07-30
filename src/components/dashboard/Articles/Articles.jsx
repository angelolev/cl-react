import React from "react";
import ArticleItem from "./ArticleItem";

const Articles = (props) => {
  const LastArticles = [
    {
      id: 1,
      title: "titulo de articulo",
      image: "./images/logo.png",
      autor: "Angelo Leva",
      link: "#",
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
