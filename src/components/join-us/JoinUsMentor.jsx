import React from "react";
import { useForm } from "react-hook-form";
import { db } from "../../services/firebase";
import Swal from "sweetalert2";

const JoinsUsMentor = () => {
  const { register, handleSubmit, reset, errors } = useForm();

  const saveMentor = (name, lastname, email, topic) => {
    db.collection("mentors").doc().set({
      name,
      lastname,
      email,
      topic,
    });

    Swal.fire({
      title: "Gracias por postular!",
      text: "Muy pronto nos contactaremos contigo!",
      icon: "success",
      confirmButtonText: "Ok",
    });
  };

  const onSubmit = (data) => {
    saveMentor(data.name, data.lastname, data.email, data.topic);
    reset({
      name: "",
      lastname: "",
      email: "",
      topic: "",
    });
  };

  return (
    <div className="join-mentor">
      <form className="join-mentor__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="join-mentor__form-header">
          <h2>Inscríbete aquí</h2>
        </div>
        <div className="join-mentor__form-content">
          <small>Comparte conocimiento y guía a la comunidad</small>
          <div className="join-mentor__form-item">
            <input
              name="name"
              type="text"
              ref={register({ required: true })}
              placeholder="Nombres"
              className="form-input"
              maxLength="30"
            />
            {errors.name && <span>Ingresa tu nombre</span>}
          </div>
          <div className="join-mentor__form-item">
            <input
              name="lastname"
              type="text"
              ref={register({ required: true })}
              placeholder="Apellidos"
              className="form-input"
              maxLength="30"
            />
            {errors.lastname && <span>Ingresa tu apellido</span>}
          </div>

          <div className="join-mentor__form-item">
            <input
              name="email"
              type="email"
              ref={register({ required: true })}
              placeholder="Correo electrónico"
              className="form-input"
              maxLength="50"
            />
            {errors.email && (
              <span>Ingresa una dirección de correo válida</span>
            )}
          </div>
          <div className="join-mentor__form-item">
            <input
              name="topic"
              type="text"
              ref={register({ required: true })}
              placeholder="¿En qué quieres ser mentor(a)?"
              className="form-input"
              maxLength="30"
            />
            {errors.lastname && <span>Ingresa tu especialidad</span>}
          </div>
          <div className="join-mentor__form-item">
            <input type="submit" className="form-button" value="Enviar" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default JoinsUsMentor;
