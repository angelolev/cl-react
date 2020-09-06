import React from "react";
import Hero from "../commons/Hero/Hero";
import heroImage from "./studygroup.svg";
import Session from "./Session";

const sessions = [
  {
    id: 0,
    type: "html",
    title: "Sesion 01 - Intro a HTML",
    description:
      "En esta sesion conversamos sobre temas generales de HTML para poder entender el proceso de renderizado en el browser",
    link: "/sesion01",
  },
  {
    id: 1,
    type: "css",
    title: "Sesion 01 - Intro a HTML",
    description:
      "En esta sesion conversamos sobre temas generales de HTML para poder entender el proceso de renderizado en el browser",
    link: "/sesion01",
  },
  {
    id: 2,
    type: "js",
    title: "Sesion 01 - Intro a HTML",
    description:
      "En esta sesion conversamos sobre temas generales de HTML para poder entender el proceso de renderizado en el browser",
    link: "/sesion01",
  },
  {
    id: 3,
    type: "html",
    title: "Sesion 01 - Intro a HTML",
    description:
      "En esta sesion conversamos sobre temas generales de HTML para poder entender el proceso de renderizado en el browser",
    link: "/sesion01",
  },
  {
    id: 4,
    type: "js",
    title: "Sesion 01 - Intro a HTML",
    description:
      "En esta sesion conversamos sobre temas generales de HTML para poder entender el proceso de renderizado en el browser",
    link: "/sesion01",
  },
  {
    id: 5,
    type: "css",
    title: "Sesion 01 - Intro a HTML",
    description:
      "En esta sesion conversamos sobre temas generales de HTML para poder entender el proceso de renderizado en el browser",
    link: "/sesion01",
  },
];

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
            {sessions.map((session) => {
              return (
                <Session
                  key={session.id}
                  title={session.title}
                  type={session.type}
                  description={session.description}
                  link={session.link}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default GroupHtml;
