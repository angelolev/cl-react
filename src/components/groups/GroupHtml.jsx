import React from "react";
import Hero from "../commons/Hero";
import heroImage from "./studygroup.svg";
import htmlImage from "./html5.png";
import cssImage from "./css.png";
import jsImage from "./js.png";

const GroupHtml = () => {
  return (
    <>
      <Hero title="Grupo de Estudio HTML y CSS" image={heroImage} />
      <section className="study-group">
        <div className="container">
          <div className="study-group__title">
            <h3>Bienvenid@ al grupo de estudio HTML y CSS.</h3>
          </div>
          <div className="study-group__description">
            <p>
              Aqui podras encontrar las sesiones junto con material referente a
              los temas de las clases.
            </p>
          </div>

          <div className="group__sessions">
            <div className="session">
              <div className="session__image">
                <img src={htmlImage} alt="" />
              </div>
              <div className="session__description">
                <h4>Sesion 01 - Intro a HTML</h4>
                <p>
                  En esta sesion conversamos sobre temas generales de HTML para
                  poder entender el proceso de renderizado en el browser
                </p>
              </div>
            </div>
            <div className="session">
              <div className="session__image">
                <img src={jsImage} alt="" />
              </div>
              <div className="session__description">
                <h4>Sesion 01 - Intro a HTML</h4>
                <p>
                  En esta sesion conversamos sobre temas generales de HTML para
                  poder entender el proceso de renderizado en el browser
                </p>
              </div>
            </div>
            <div className="session">
              <div className="session__image">
                <img src={cssImage} alt="" />
              </div>
              <div className="session__description">
                <h4>Sesion 01 - Intro a HTML</h4>
                <p>
                  En esta sesion conversamos sobre temas generales de HTML para
                  poder entender el proceso de renderizado en el browser
                </p>
              </div>
            </div>
            <div className="session">
              <div className="session__image">
                <img src={htmlImage} alt="" />
              </div>
              <div className="session__description">
                <h4>Sesion 01 - Intro a HTML</h4>
                <p>
                  En esta sesion conversamos sobre temas generales de HTML para
                  poder entender el proceso de renderizado en el browser
                </p>
              </div>
            </div>
            <div className="session">
              <div className="session__image">
                <img src={jsImage} alt="" />
              </div>
              <div className="session__description">
                <h4>Sesion 01 - Intro a HTML</h4>
                <p>
                  En esta sesion conversamos sobre temas generales de HTML para
                  poder entender el proceso de renderizado en el browser
                </p>
              </div>
            </div>
            <div className="session">
              <div className="session__image">
                <img src={htmlImage} alt="" />
              </div>
              <div className="session__description">
                <h4>Sesion 01 - Intro a HTML</h4>
                <p>
                  En esta sesion conversamos sobre temas generales de HTML para
                  poder entender el proceso de renderizado en el browser
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GroupHtml;
