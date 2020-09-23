import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";

const goToHome = () => {
  window.location.href = "/";
};

const showMenu = () => {
  let navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("show");
};

const Nav = () => (
  <nav className="nav">
    <div className="container">
      <div className="nav__content">
        <div className="nav__top">
          <div className="nav__logo" id="burger">
            <img src={logo} alt="" onClick={goToHome} />
            <span>Coding Latam</span>
          </div>
          <div className="nav__links">
            <ul>
              <li>
                <Link className="scrollable" to="/clases">
                  Clases
                </Link>
              </li>
              <li>
                <Link className="scrollable" to="/grupos">
                  Grupos de estudio
                </Link>
              </li>
              <li>
                <Link className="scrollable" to="/talks">
                  Talks
                </Link>
              </li>
              <li>
                <Link className="scrollable" to="/calendario">
                  Calendario
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav__button">
            <a className="btn yellow scrollable" onClick={showMenu}>
              Menú
            </a>
          </div>
        </div>
        <div className="nav__bottom">
          <ul className="nav__menu fadeIn" id="navMenu">
            <button id="navClose" onClick={showMenu}>
              X
            </button>

            <li>
              <a className="scrollable" href="/clases">
                Clases
              </a>
            </li>
            <li>
              <a className="scrollable" href="/grupos">
                Grupos de estudio
              </a>
            </li>
            <li>
              <a className="scrollable" href="/talks">
                Talks
              </a>
            </li>
            <li>
              <a className="scrollable" href="/calendario">
                Calendario
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
);

export default Nav;