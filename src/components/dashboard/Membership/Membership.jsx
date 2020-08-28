import React from "react";

const Membership = () => {
  return (
    <div className="membership">
      <div className="membership__description">
        <h3>Aprende con nosotros!</h3>
        <p>Conoce los beneficios premium que tenemos para ti!</p>
        <p>Múltiples opciones para mejorar tus skills!</p>
      </div>
      <div className="membership__list">
        <div className="membership__item">
          <i className="icon icon-patreon"></i>{" "}
          <a target="_blank" href="https://www.patreon.com/codinglatam">
            Patreon
          </a>
        </div>
        <div className="membership__item">
          <i className="icon icon-buymeacoffee"></i>{" "}
          <a target="_blank" href="https://www.buymeacoffee.com/codinglatam">
            Buymeacoffee
          </a>
        </div>
      </div>
    </div>
  );
};

export default Membership;
