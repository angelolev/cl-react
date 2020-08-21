import React, { useState, useEffect } from "react";
import JoinUs from "../components/landing/JoinUs";
import Header from "../components/commons/Header";
import RecommendedCourses from "../components/commons/RecommendedCourses";
import { db } from "../services/firebase";

const Home = () => {
  const [recommendedCourses, setRecommendedCourses] = useState([]);

  useEffect(() => {
    db.collection("recommendedCourses")
      .get()
      .then((querySnapshot) => {
        const loadedCourses = [];
        querySnapshot.forEach((doc) => {
          const currentDoc = doc.data();
          currentDoc.id = doc.id;
          loadedCourses.push(currentDoc);
        });
        setRecommendedCourses(loadedCourses);
      });
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
