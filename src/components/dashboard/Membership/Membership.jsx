import React from "react";

const Membership = () => {
  return (
    <div className="membership">
      <div className="membership__description">
        <h3>Continúa tu aprendizaje!</h3>
        <p>
          Obtén seguimiento personal y mentoría 1 a 1 con nuestros intructores.
        </p>
        <p>
          Tenemos para ti múltiples opciones para encontrar la mejor versión de
          ti y mejorar tus habilidades!
        </p>
      </div>
      <div className="membership__list">
        <div className="membership__item">
          <i className="icon icon-patreon"></i>{" "}
          <a target="_blank" href="https://www.patreon.com/codinglatam">
            Patreon
          </a>
        </div>
        {/* <div className="membership__item">
          <i className="icon icon-buymeacoffee"></i>{" "}
          <a target="_blank" href="https://www.buymeacoffee.com/codinglatam">
            Buymeacoffee
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Membership;
