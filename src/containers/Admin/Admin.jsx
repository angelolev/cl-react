import React, { useState, useEffect } from "react";
import { db } from "../../services/firebase";

const Admin = () => {
  const [sessions, setSessions] = useState([]);
  const [resources, setResources] = useState([]);
  const [resource, setResource] = useState({
    session_id: "",
    title: "",
    link: "",
  });

  useEffect(() => {
    db.collection("sessions")
      .get()
      .then((querySnapshot) => {
        const loadedSessions = [];
        querySnapshot.forEach((doc) => {
          const currentDoc = doc.data();
          currentDoc.id = doc.id;
          loadedSessions.push(currentDoc);
        });
        setSessions(loadedSessions);
        setResource({
          ...resource,
          session_id: loadedSessions[0].id,
        });
      });

    db.collection("resources")
      .get()
      .then((querySnapshot) => {
        const loadedResources = [];
        querySnapshot.forEach((doc) => {
          const currentDoc = doc.data();
          currentDoc.id = doc.id;
          loadedResources.push(currentDoc);
        });
        setResources(loadedResources);
      });
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setResource({
      ...resource,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createResource(resource);
    setResource({
      session_id: sessions[0].id,
      title: "",
      link: "",
    });
  };

  const createResource = (newResource) => {
    db.collection("resources")
      .add({
        session_id: newResource.session_id,
        title: newResource.title,
        link: newResource.link,
      })
      .then(() => {
        console.log("Se añadió el recurso.");
      });
  };

  return (
    <div className="resources">
      <h2>Admin: Añadir Recursos</h2>
      <div className="resources__add">
        <form onSubmit={handleSubmit} className="resources__form">
          <label htmlFor="session_id">Session:</label>
          <select
            id="session_id"
            value={resource.session_id}
            onChange={handleChange}
          >
            {sessions.map((item, id) => {
              return (
                <option value={item.id} key={id}>
                  {item.title}
                </option>
              );
            })}
          </select>

          <label htmlFor="title">Titulo del recurso:</label>
          <input
            type="text"
            id="title"
            value={resource.title}
            onChange={handleChange}
          />

          <label htmlFor="link">Link recurso:</label>
          <input
            type="text"
            id="link"
            value={resource.link}
            onChange={handleChange}
          />

          <input type="submit" value="Agregar" />
        </form>
      </div>
      {/* <div className="resources__list">
        {resources.map((item, id) => {
          return (
            <div key={id}>
              <p>{item._id}</p>
              <p>{item.link}</p>
              <p>{item.session_id}</p>
              <p>{item.title}</p>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Admin;
