import React from "react";
import { Link } from "react-router-dom";

const JoinUs = () => (
  <div className="join-us" id="join">
    <div className="container">
      <h2>¿Cómo me uno?</h2>
      <p>En Coding Latam tienes 2 maneras de ser parte de la comunidad:</p>
      <div className="item">
        <div className="item__image">
          <img src="/images/student.svg" alt="" />
        </div>
        <div className="item__description">
          <h3>Estudiante</h3>
          <p>
            Quieres aprender sobre tecnología y mejorar tus habilidades. Únete a
            Discord!
          </p>
          <a
            className="btn yellow"
            target="_blank"
            href="https://discord.com/invite/7bpGcDT"
            rel="noopener noreferrer"
          >
            Quiero ser estudiante
          </a>
        </div>
      </div>
      <div className="item">
        <div className="item__image">
          <img src="/images/teacher.svg" alt="" />
        </div>
        <div className="item__description">
          <h3>Mentor</h3>
          <p>
            Quieres compartir tu experiencia con nuevos entusiastas de la
            tecnología
          </p>

          <Link className="btn yellow" to={"/mentor"}>
            Quiero ser mentor
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default JoinUs;
