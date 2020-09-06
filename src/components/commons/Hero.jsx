import React from "react";

const Hero = (props) => {
  const { image, title } = props;

  return (
    <header className="hero">
      <div className="hero__content">
        <div className="hero__image">
          <img src={image} alt="" />
        </div>
        <div className="hero__text">
          <h1>{title}</h1>
        </div>
      </div>
    </header>
  );
};

export default Hero;
