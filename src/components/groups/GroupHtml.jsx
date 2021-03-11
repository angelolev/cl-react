import React, { useState, useEffect, useContext } from "react";
import Hero from "../commons/Hero/Hero";
import heroImage from "./studygroup.svg";
import Session from "./Session";
import { db } from "../../services/firebase";
import Loader from "../loader/Loader";
import { UserContext } from "../../providers/UserProvider";
import { Redirect } from "react-router-dom";

const GroupHtml = () => {
  const [sessions, setSessions] = useState([]);
  const user = useContext(UserContext);
  const [redirect, setredirect] = useState(null);

  useEffect(() => {
    if (user == null) {
      setredirect("/login");
    }
  }, [user]);

  useEffect(() => {
    db.collection("sessions")
      .orderBy("group")
      .orderBy("title")
      .get()
      .then((querySnapshot) => {
        const loadedSessions = [];
        querySnapshot.forEach((doc) => {
          const currentDoc = doc.data();
          currentDoc.id = doc.id;
          loadedSessions.push(currentDoc);
        });
        setSessions(loadedSessions);
      });
  }, []);

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <>
      <Hero title="Grupo de Estudio HTML, CSS y Javascript" image={heroImage} />
      <section className="study-group">
        <div className="container">
          <div className="study-group__title">
            <h3>Bienvenid@ al grupo de estudio HTML, CSS y Javascript.</h3>
          </div>
          <div className="study-group__description">
            <p>
              Aqui podras encontrar las sesiones junto con material referente a
              los temas de las clases.
            </p>
          </div>
          {sessions.length > 0 ? (
            <div className="group__sessions">
              {sessions.map((session) => {
                return (
                  <Session
                    key={session.id}
                    title={session.title}
                    type={session.type}
                    description={session.description}
                    group={session.group}
                    link={session.link}
                  />
                );
              })}
            </div>
          ) : (
            <Loader />
          )}
        </div>
      </section>
    </>
  );
};

export default GroupHtml;
