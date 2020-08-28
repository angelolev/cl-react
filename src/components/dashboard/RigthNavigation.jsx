import React from "react";
import Articles from "./Articles/Articles";
import Questions from "./Questions/Questions";

const RightNavigation = () => {
  return (
    <aside className="right-navigation">
      <Articles />
      <Questions />
    </aside>
  );
};

export default RightNavigation;
