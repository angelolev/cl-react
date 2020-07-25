import React from "react";

const JoinUs = () => (
  <div className="join-us">
    <div className="item">
      <div className="item__image">
        <img src="/images/student.svg" alt="" />
      </div>
      <div className="item__description">
        <h3>Estudiante</h3>
        <p>Quieres aprender sobre tecnologia y mejorar tus habilidades</p>
        <a
          className="btn yellow"
          target="_blank"
          href="https://forms.gle/R87ZcpngijKSjZmb8"
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
        <p>Quieres compartir tu experiencia con nuevos aspirantes a devs</p>
        <a
          className="btn yellow"
          target="_blank"
          href="https://forms.gle/GVy8ayWwjqqpgV929"
        >
          Quiero ser mentor
        </a>
      </div>
    </div>
  </div>
);

export default JoinUs;
