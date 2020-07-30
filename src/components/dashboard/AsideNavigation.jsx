import React from "react";
import { Link } from "react-router-dom";

const AsideNavigation = () => {
  return (
    <aside className="aside-navigation">
      <h2>Navegación</h2>
      <ul>
        <li>
          <Link to="/dashboard">Home</Link>
        </li>
        <li>
          <Link to="/cursos">Cursos</Link>
        </li>
        <li>
          <Link to="/talks">Talks</Link>
        </li>
        <li>
          <Link to="/proyectos">Proyectos</Link>
        </li>
        <li>
          <Link to="/grupos">Grupos</Link>
        </li>
      </ul>
    </aside>
  );
};

export default AsideNavigation;
