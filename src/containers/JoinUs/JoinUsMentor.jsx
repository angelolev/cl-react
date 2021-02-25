import React from "react";
import Mentor from "../../components/join-us/JoinUsMentor";
import discord from "../../components/join-us/discord.svg";
import meeting from "../../components/join-us/meeting.svg";
import time from "../../components/join-us/time.svg";

const JoinUsMentor = () => {
  return (
    <section className="join">
      <div className="join__banner">
        <div className="container">
          <div className="join__presentation">
            <h1>Mentoría</h1>
            <p>
              Empezar en el mundo de la tecnología nologia puede ser un poco
              difícil, habiendo tantos posibles caminos que uno puede tomar.
            </p>

            <p>
              Te invitamos a ser parte del programa de mentores de Coding Latam,
              para que puedas apoyar y ser guía de los nuevos entusiastas del
              mundo de la web
            </p>
          </div>

          <Mentor />
        </div>
      </div>
      <div className="join__description">
        <div className="container">
          <h2>¿Qué te pedimos?</h2>
          <div className="join__requirements">
            <div className="join__item">
              <img src={time} alt="" />
              <h3>Coordina con tus padawan</h3>
              <p>Setea meetings y horarios de acuerdo a tu disponibilidad</p>
            </div>
            <div className="join__item">
              <img src={discord} alt="" />
              <h3>Utiliza los canales oficiales</h3>
              <p>Puedes realizar la mentoría en el server de Discord</p>
            </div>
            <div className="join__item">
              <img src={meeting} alt="" />
              <h3>Reunión mensual de mentores</h3>
              <p>
                1 vez al mes nos juntamos a conversar sobre el programa(y unas
                cervezas)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsMentor;
