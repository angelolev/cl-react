import React, { useState, useEffect } from "react";
import ArticleItem from "./ArticleItem";
import articleImage from "./article.png";
import { db } from "../../../services/firebase";
import { useDispatch, useSelector } from "react-redux";
import { getLessonResourcesList } from "../../../services/resources-service";

const Articles = (props) => {
  const dispatch = useDispatch();
  const resources = useSelector((state) => state.resources.resourcesList);

  useEffect(() => {
    dispatch(getLessonResourcesList(props.lessonId));
  }, []);
  // useEffect(() => {
  //   db.collection("resources")
  //     .where("session_id", "==", id)
  //     .get()
  //     .then((querySnapshot) => {
  //       const loadedResources = [];
  //       querySnapshot.forEach((doc) => {
  //         const currentDoc = doc.data();
  //         currentDoc.id = doc.id;
  //         loadedResources.push(currentDoc);
  //       });
  //       setResources(loadedResources);
  //     });
  // }, []);

  return (
    <div className="lesson-resources">
      <div className="lesson-resources__title">
        <h3>Recursos de la clase</h3>
      </div>
      <div className="lesson-resources__list">
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
