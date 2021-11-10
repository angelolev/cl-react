import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Hero from "../../components/commons/Hero/Hero";
import heroImage from "./student.svg";
import { useDispatch, useSelector } from "react-redux";
import { signInFirebase } from "../../store/actions/auth";

const Login = () => {
  const [redirect, setRedirect] = useState(null);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth);

  // useEffect(() => {
  //   console.log("entre");
  //   if (currentUser) {
  //     setRedirect("/clases");
  //   }
  // }, []);

  if (currentUser?.displayName) {
    return <Redirect to="/clases" />;
  }

  const handleLogin = (provider) => {
    dispatch(signInFirebase(provider));
  };

  return (
    <>
      <Hero
        title="Inicia sesión para ver los cursos y talleres"
        image={heroImage}
      />
      <div className="container">
        <section className="login">
          <h2>Inicia sesión</h2>
          <p>
            Para poder disfrutar del contenido de los cursos y talleres, por
            favor logueate
          </p>
          <button
            className="login__button google"
            onClick={() => handleLogin("Google")}
          >
            <span className="icon icon-google"></span>
            <span>Continuar con Google</span>
          </button>
          <button
            className="login__button github"
            onClick={() => handleLogin("Github")}
          >
            <span className="icon icon-github"></span>
            <span>Continuar con Github</span>
          </button>
        </section>
      </div>
    </>
  );
};

export default Login;
