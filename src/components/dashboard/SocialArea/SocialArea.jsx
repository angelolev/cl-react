import React from "react";
// import LastTalks from "../LastTalks/LastTalks";
// import LastCourses from "../LastCourses/LastCourses";
// import LastGroups from "../LastGroups/LastGroups";
import Announcements from "../Announcements/Announcements";
import LastVideos from "../LastVideos/LastVideos";

const SocialArea = () => {
  return (
    <div className="social-area">
      {/* <LastCourses />
      <LastTalks />
      <LastGroups /> */}
      <LastVideos />
      <Announcements />
    </div>
  );
};

export default SocialArea;
