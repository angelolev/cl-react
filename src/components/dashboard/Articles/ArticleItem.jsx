import React from "react";

const ArticleItem = (props) => {
  return (
    <div className="articles__item">
      <img src={props.article.image} alt="" />
      <div>
        <a href={props.article.link}>{props.article.title}</a>
        <p>{props.article.autor}</p>
      </div>
    </div>
  );
};

export default ArticleItem;
