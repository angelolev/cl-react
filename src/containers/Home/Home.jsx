import React from "react";
import JoinUs from "../../components/join-us/JoinUs";
import Header from "../../components/commons/Header/Header";
import RecommendedCourses from "../../components/commons/RecommendedCourses/RecommendedCourses";

const Home = () => {
  return (
    <div>
      <Header />
      <RecommendedCourses />
      <JoinUs />
    </div>
  );
};

export default Home;
