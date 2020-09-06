import React from "react";
import ArticleItem from "./ArticleItem";
import articleImage from "./article.png";

const Articles = (props) => {
  const { heading, articlesList } = props.articles;
  return (
    <div className="articles">
      <div className="articles__title">
        <h3>{heading}</h3>
      </div>
      <div className="articles__list">
        {articlesList.map((article) => {
          return (
            <ArticleItem
              key={article.id}
              article={article}
              image={articleImage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Articles;
