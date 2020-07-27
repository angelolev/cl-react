import React, { useState, useEffect } from "react";
import JoinUs from "../components/JoinUs";
import Header from "../components/Header";
import RecommendedCourses from "../components/RecommendedCourses";
// import importScript from "../hooks/importScripts";

import "../styles.scss";

const Home = () => {
  const [recommendedCourses, setRecommendedCourses] = useState([]);
  const fileSrc = "../assets/js/script.js";

  useEffect(() => {
    fetch("https://coding-latam.firebaseio.com/recommendedCourses.json").then(
      (response) =>
        response.json().then((responseData) => {
          const loadedCourses = [];
          for (const key in responseData) {
            loadedCourses.push({
              id: key,
              title: responseData[key].title,
              description: responseData[key].description,
              image: responseData[key].image,
              link: responseData[key].link,
            });
          }
          setRecommendedCourses(loadedCourses);
        })
    );
  }, []);

  return (
    <div>
      <Header />
      <RecommendedCourses courses={recommendedCourses} />
      <JoinUs />
    </div>
  );
};

export default Home;
