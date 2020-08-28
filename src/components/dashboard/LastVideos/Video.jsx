import React from "react";

const Video = (props) => {
  const { url } = props;
  return (
    <div className="video">
      <iframe
        src="https://www.youtube.com/embed/RGWFja6Irm8"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
