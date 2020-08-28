import React from "react";
import Video from "./Video";

const LastVideos = () => {
  return (
    <div className="last-videos">
      <h3>Últimos videos</h3>
      <Video url={"https://www.youtube.com/watch?v=RGWFja6Irm8"} />
      <Video url={"https://www.youtube.com/watch?v=hCE0qNr6elY"} />
      <Video url={"https://www.youtube.com/watch?v=K83bSNI01FI"} />
    </div>
  );
};

export default LastVideos;
