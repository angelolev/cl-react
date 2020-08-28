import React from "react";

const Video = (props) => {
  const { url, name } = props;
  return (
    <div className="video">
      <a target="_blank" href="https://www.youtube.com/watch?v=tzNeJPxZ6A8">
        <img src={url} alt="" />
        <p>{name}</p>
      </a>
    </div>
  );
};

export default Video;
