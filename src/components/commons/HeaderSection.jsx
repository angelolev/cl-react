import React from "react";

const HeaderSection = (props) => {
  return (
    <header className="groups-header">
      <div className="groups-header__image">
        <img src="/images/laptop.webp" alt="" />
      </div>
      <div className="groups-header__text">
        <h1>Conoce las próximas actividades de la comunidad</h1>
      </div>
    </header>
  );
};

export default HeaderSection;
