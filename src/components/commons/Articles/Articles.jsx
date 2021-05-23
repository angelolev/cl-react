import React, { useState, useEffect } from "react";
import ArticleItem from "./ArticleItem";
import articleImage from "./article.png";
import { db } from "../../../services/firebase";

const Articles = (props) => {
  const [resources, setResources] = useState([]);
  const id = props.id ? props.id : "";

  useEffect(() => {
    db.collection("resources")
      .where("session_id", "==", id)
      .get()
      .then((querySnapshot) => {
        const loadedResources = [];
        querySnapshot.forEach((doc) => {
          const currentDoc = doc.data();
          currentDoc.id = doc.id;
          loadedResources.push(currentDoc);
        });
        setResources(loadedResources);
      });
  }, []);

  return (
    <div className="articles">
      <div className="articles__title">
        <h3>Recursos de la clase</h3>
      </div>
      <div className="articles__list">
        {resources.map((article) => {
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
