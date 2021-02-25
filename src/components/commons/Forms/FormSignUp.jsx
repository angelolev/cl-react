import React from "react";
import { useForm } from "react-hook-form";
import { db } from "../../../services/firebase";
import Swal from "sweetalert2";

const FormSignUp = () => {
  const { register, handleSubmit, reset, errors } = useForm();

  const saveStudent = (name, lastname, phone, email) => {
    const url = window.location.href;

    db.collection("students").doc().set({
      name,
      lastname,
      phone,
      email,
      url,
    });

    Swal.fire({
      title: "Gracias por registrarte!",
      text: "En breve nos contactaremos contigo.",
      icon: "success",
      confirmButtonText: "Ok",
    });
  };

  const onSubmit = (data) => {
    saveStudent(data.name, data.lastname, data.phone, data.email);
    reset({
      name: "",
      lastname: "",
      phone: "",
      email: "",
    });
  };

  return (
    <div className="sign-in">
      <form className="sign-in__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="sign-in__form-header">
          <h2>Inscríbete aquí</h2>
        </div>
        <div className="sign-in__form-content">
          <small>Obtén un descuento exclusivo completando tus datos HOY.</small>
          <div className="sign-in__form-item">
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
          <div className="sign-in__form-item">
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
          <div className="sign-in__form-item">
            <input
              name="phone"
              type="tel"
              ref={register({ required: true })}
              placeholder="Celular"
              className="form-input"
              maxLength="12"
            />
            {errors.phone && <span>Ingresa tu celular</span>}
          </div>
          <div className="sign-in__form-item">
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
          <div className="sign-in__form-item">
            <input type="submit" className="form-button" value="Enviar" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormSignUp;