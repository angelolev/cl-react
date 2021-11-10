import React from "react";

const ArticleItem = (props) => {
  return (
    <div className="lesson-resource__item">
      <div className="item__image">
        <img src={props.image} alt="" />
      </div>
      <div className="item__description">
        <a href={props.article.link} target="_blank" rel="noopener noreferrer">
          {props.article.title}
        </a>
      </div>
    </div>
  );
};

export default ArticleItem;
