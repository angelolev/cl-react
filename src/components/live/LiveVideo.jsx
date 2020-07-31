import React from "react";

const LiveVideo = () => {
  return (
    <section className="live__video">
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/6feo8GymG_Q"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <h3>Crea tu Github Profile con README</h3>
      <p>
        GitHub ha lanzado una nueva funcionalidad que te permite mostrar un
        README completamente personalizado en la página de tu perfil.
      </p>
      <p>
        Te vamos a explicar paso a paso lo que debes hacer para conseguir el
        tuyo.
      </p>
    </section>
  );
};

export default LiveVideo;
