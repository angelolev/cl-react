import React, { useEffect, useContext, useState } from "react";
import { signInWithGoogle } from "../../services/firebase";
import { UserContext } from "../../providers/UserProvider";
import { Redirect } from "react-router-dom";
import Hero from "../../components/commons/Hero/Hero";
import heroImage from "./student.svg";

const Login = () => {
  const user = useContext(UserContext);
  const [redirect, setredirect] = useState(null);

  useEffect(() => {
    if (user) {
      setredirect("/clases");
    }
  }, [user]);

  if (redirect) {
    return <Redirect to={redirect} />;
  }

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
          <button className="login__button" onClick={signInWithGoogle}>
            <span className="icon icon-google"></span>
            <span>Continue with Google</span>
          </button>
        </section>
      </div>
    </>
  );
};

export default Login;
