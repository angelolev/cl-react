import React from "react";

const ArticleItem = (props) => {
  return (
    <div className="articles__item">
      <div className="item__image">
        <img src={props.article.image} alt="" />
      </div>
      <div className="item__description">
        <a href={props.article.link}>{props.article.title}</a>
      </div>
    </div>
  );
};

export default ArticleItem;
