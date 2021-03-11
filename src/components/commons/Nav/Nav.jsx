import React, { useContext, useEffect, useState } from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { UserContext } from "../../../providers/UserProvider";
import { logOut } from "../../../services/firebase";
import { Redirect } from "react-router-dom";

const goToHome = () => {
  window.location.href = "/";
};

const showMenu = () => {
  let navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("show");
};

const Nav = () => {
  const user = useContext(UserContext);
  const [currentUser, setCurrentUser] = useState("Iniciar sesión");
  const [currentLink, setCurrentLink] = useState("/login");

  const userLogout = () => {
    logOut();
    goToHome();
  };

  useEffect(() => {
    if (user !== null) {
      setCurrentUser(user.displayName);
      setCurrentLink("/clases");
    }
  }, [user]);

  return (
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
                  <Link className="scrollable" to="/mentor">
                    Mentoría
                  </Link>
                </li>
                <li>
                  <Link className="scrollable" to="/calendario">
                    Calendario
                  </Link>
                </li>
                <li>
                  <a
                    className="scrollable"
                    href="https://dailybreakpoint.dev"
                    target="_blank"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <Link className="scrollable" to={currentLink}>
                    <span className="icon icon-user"></span>
                    {currentUser}
                  </Link>
                </li>
                {user !== null ? (
                  <li className="btn yellow logout" onClick={userLogout}>
                    Salir
                  </li>
                ) : (
                  false
                )}
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
                <a className="scrollable" href="/mentoria">
                  Mentoría
                </a>
              </li>
              <li>
                <a className="scrollable" href="/calendario">
                  Calendario
                </a>
              </li>
              <li>
                <a
                  className="scrollable"
                  href="https://dailybreakpoint.dev"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
              <li>
                <a className="scrollable" href="/calendario">
                  {currentUser}
                </a>
              </li>
              {user !== null ? <li>Salir</li> : false}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
