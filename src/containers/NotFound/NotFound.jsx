import React from "react";
import image from "./not-found.svg";

const NotFound = () => {
  return (
    <section className="not-found">
      <img src={image} alt="" />
      <h1>Lo que buscabas no está aquí </h1>
    </section>
  );
};

export default NotFound;
