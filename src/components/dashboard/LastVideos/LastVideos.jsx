import React from "react";
import Video from "./Video";

const LastVideos = () => {
  return (
    <div className="last-videos">
      <h3>Últimos videos</h3>
      <Video
        url={"https://i.ytimg.com/vi/tzNeJPxZ6A8/maxresdefault.jpg?v=5f468d39"}
        name={"Creando un sitio con Flexbox"}
      />
      <Video
        url={"https://i.ytimg.com/vi/tzNeJPxZ6A8/maxresdefault.jpg?v=5f468d39"}
        name={"Taller de Flexbox"}
      />
      <Video
        url={"https://i.ytimg.com/vi/tzNeJPxZ6A8/maxresdefault.jpg?v=5f468d39"}
        name={"Implementando responsive design"}
      />
    </div>
  );
};

export default LastVideos;
