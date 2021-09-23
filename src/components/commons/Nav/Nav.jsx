import React, { useEffect, useState } from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOutFirebase } from "../../../store/actions/auth";

const goToHome = () => {
  window.location.href = "/";
};

const showMenu = () => {
  let navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("show");
};

const Nav = (props) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth);
  const [currentLink, setCurrentLink] = useState("/login");
  const userLogout = () => {
    dispatch(logOutFirebase());
  };

  useEffect(() => {
    if (currentUser?.displayName) {
      setCurrentLink("/admin");
    }
  }, [currentUser]);

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
                  <Link to="/clases">Clases</Link>
                </li>
                <li>
                  <Link to="/grupos">Grupos de estudio</Link>
                </li>
                <li>
                  <Link to="/mentor">Mentoría</Link>
                </li>
                <li>
                  <Link to="/calendario">Calendario</Link>
                </li>
                <li>
                  <a href="https://dailybreakpoint.dev" target="_blank">
                    Blog
                  </a>
                </li>
                <li>
                  <Link to={currentLink}>
                    <img
                      src={currentUser.photoURL}
                      alt={currentUser.displayName}
                    />
                    {currentUser?.displayName
                      ? currentUser.displayName
                      : "Iniciar sesión"}
                  </Link>
                </li>
                {currentUser?.displayName ? (
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
                <Link to="/clases">Clases</Link>
              </li>
              <li>
                <Link to="/grupos">Grupos de estudio</Link>
              </li>
              <li>
                <Link to="/mentoria">Mentoría</Link>
              </li>
              <li>
                <Link to="/calendario">Calendario</Link>
              </li>
              <li>
                <a href="https://dailybreakpoint.dev" target="_blank">
                  Blog
                </a>
              </li>
              <li>
                <Link to={currentLink}>
                  <img
                    src={currentUser.photoURL}
                    alt={currentUser.displayName}
                  />
                  {currentUser?.displayName
                    ? currentUser.displayName
                    : "Iniciar sesión"}
                </Link>
              </li>
              {currentUser?.displayName ? (
                <li onClick={userLogout}>Salir</li>
              ) : (
                false
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
