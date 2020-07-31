import React from "react";
import { Link } from "react-router-dom";

const AsideNavigation = () => {
  return (
    <aside className="asideNavigation">
      <h3>Navegación</h3>
      <ul className="asideNavigation__list">
        <li>
          <Link className="asideNavigation__item" to="/dashboard">
            Home
          </Link>
        </li>
        <li>
          <Link className="asideNavigation__item" to="/cursos">
            Cursos
          </Link>
        </li>
        <li>
          <Link className="asideNavigation__item" to="/talks">
            Talks
          </Link>
        </li>
        <li>
          <Link className="asideNavigation__item" to="/proyectos">
            Proyectos
          </Link>
        </li>
        <li>
          <Link className="asideNavigation__item" to="/grupos">
            Grupos
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default AsideNavigation;
