import React from "react";
import LastTalks from "../LastTalks/LastTalks";
import Announcements from "../Announcements/Announcements";
import LastVideos from "../LastVideos/LastVideos";

const SocialArea = () => {
  return (
    <div className="social-area">
      <LastVideos />
      <LastTalks />
      <Announcements />
    </div>
  );
};

export default SocialArea;
