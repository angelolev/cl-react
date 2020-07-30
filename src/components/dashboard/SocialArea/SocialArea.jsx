import React from "react";
import LastTalks from "../LastTalks/LastTalks";
import LastCourses from "../LastCourses/LastCourses";
import LastGroups from "../LastGroups/LastGroups";

const SocialArea = () => {
  return (
    <div className="social-area">
      <LastTalks />
      <LastCourses />
      <LastGroups />
    </div>
  );
};

export default SocialArea;
