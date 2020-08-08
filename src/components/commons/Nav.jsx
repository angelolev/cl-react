import React from "react";

const Nav = () => (
  <nav className="nav">
    <div className="container">
      <div className="nav__content">
        <div className="nav__top">
          <div className="nav__logo" id="burger">
            <img src="./images/logo.png" alt="" />
            <span>Coding Latam</span>
          </div>
          <div className="nav__links">
            <ul>
              <li>
                <a className="scrollable" href="#description">
                  Cómo funciona
                </a>
              </li>
              <li>
                <a className="scrollable" href="#courses">
                  Cursos
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
            </ul>
          </div>
          <div className="nav__button">
            <a className="btn yellow scrollable" href="#join">
              Únete
            </a>
          </div>
        </div>
        <div className="nav__bottom">
          <ul className="nav__menu fadeIn" id="navMenu">
            <button id="navClose">X</button>
            <li>
              <a className="scrollable" href="#join">
                Únete
              </a>
            </li>
            <li>
              <a className="scrollable" href="#description">
                Cómo funciona
              </a>
            </li>
            <li>
              <a className="scrollable" href="#courses">
                Cursos
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
          </ul>
        </div>
      </div>
    </div>
  </nav>
);

export default Nav;
