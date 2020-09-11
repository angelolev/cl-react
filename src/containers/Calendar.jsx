import React, { useState } from "react";

import moment from "moment";
import "moment/locale/es";
moment.locale("es");

const Calendar = () => {
  function getTime(day) {
    const date = new Date(`September ${day}, 2020 20:00:00 GMT-05:00`);
    // const date = new Date(2020, 8, day, 20, 0, 0);
    return " " + moment(date).fromNow();
  }

  const setiembre = [
    {
      day: 1,
      name: "MAR",
      category: "javascript",
      description: "Variables",
      time: "8:00pm GMT-5 ",
    },
    {
      day: 2,
      name: "MIÉ",
      category: "html",
      description: "Intro a HTML",
      time: "8:00pm GMT-5 ",
    },
    {
      day: 3,
      name: "JUE",
      category: "javascript",
      description: "Operadores",
      time: "8:00pm GMT-5 ",
    },
    {
      day: 4,
      name: "VIE",
      category: "live",
      description: "Primeros pasos con React js",
      time: "8:00pm GMT-5 ",
    },
    {
      day: 7,
      name: "LUN",
      category: "html",
      description: "Manejo de assets",
      time: "8:00pm GMT-5 ",
    },
    {
      day: 8,
      name: "MAR",
      category: "javascript",
      description: "Condicionales",
      time: "8:00pm GMT-5 ",
    },
    {
      day: 9,
      name: "MIÉ",
      category: "html",
      description: "Creando nuestro proyecto",
      time: "8:00pm GMT-5 ",
    },
    {
      day: 10,
      name: "JUE",
      category: "javascript",
      description: "Ciclos",
      time: "8:00pm GMT-5 ",
    },
    {
      day: 11,
      name: "VIE",
      category: "live",
      description: "Introducción a Accesibilidad Web",
      time: "8:00pm GMT-5 ",
    },
    {
      day: 14,
      name: "LUN",
      category: "css",
      description: "Intro a CSS",
      time: "8:00pm GMT-5 ",
    },
    {
      day: 15,
      name: "MAR",
      category: "javascript",
      description: "Funciones",
      time: "8:00pm GMT-5 ",
    },
    {
      day: 16,
      name: "MIÉ",
      category: "css",
      description: "Modelo de caja",
      time: "8:00pm GMT-5 ",
    },
    {
      day: 17,
      name: "JUE",
      category: "javascript",
      description: "Arreglos",
      time: "8:00pm GMT-5 ",
    },
    {
      day: 18,
      name: "VIE",
      category: "live",
      description: "Próximamente",
      time: "8:00pm GMT-5 ",
    },
    {
      day: 21,
      name: "LUN",
      category: "css",
      description: "Selectores, clases e Ids",
      time: "8:00pm GMT-5 ",
    },
    {
      day: 22,
      name: "MAR",
      category: "javascript",
      description: "Metodos con arreglos",
      time: "8:00pm GMT-5 ",
    },
    {
      day: 23,
      name: "MIÉ",
      category: "css",
      description: "Herencia y especificidad",
      time: "8:00pm GMT-5 ",
    },
    {
      day: 24,
      name: "JUE",
      category: "javascript",
      description: "Objetos",
      time: "8:00pm GMT-5 ",
    },
    {
      day: 25,
      name: "VIE",
      category: "live",
      description: "Próximamente",
      time: "8:00pm GMT-5 ",
    },
    {
      day: 28,
      name: "LUN",
      category: "css",
      description: "Position y Display",
      time: "8:00pm GMT-5 ",
    },
    {
      day: 29,
      name: "MAR",
      category: "javascript",
      description: "Proyecto Final",
      time: "8:00pm GMT-5 ",
    },
    {
      day: 30,
      name: "MIÉ",
      category: "css",
      description: "Maquetando nuestro proyecto",
      time: "8:00pm GMT-5 ",
    },
  ];

  const newSetiembre = setiembre.map((item) => {
    return {
      ...item,
      timeAgo: getTime(item.day),
    };
  });

  const [calendar, setCalendar] = useState(newSetiembre);

  return (
    <div>
      <header className="groups-header">
        <div className="groups-header__image">
          <img src="/images/calendar-img.svg" alt="" />
        </div>
        <div className="groups-header__text">
          <h1>Nuestro calendario de actividades del mes</h1>
        </div>
      </header>
      <section className="groups-description">
        <div className="calendar">
          <div className="calendar__title">Setiembre</div>
          <div className="calendar__header">LUN</div>
          <div className="calendar__header">MAR</div>
          <div className="calendar__header">MIÉ</div>
          <div className="calendar__header">JUE</div>
          <div className="calendar__header">VIE</div>
          <div className="calendar__item vacio"></div>
          {calendar.map((item, id) => {
            return (
              <div className="calendar__item" key={id}>
                <div className="item__dayGroup">
                  <p className="item__dayName">{item.name}</p>
                  <p className="item__day">{item.day}</p>
                </div>
                {item.category ? (
                  <div className="item__card">
                    <p className={`card__category ${item.category}`}>
                      {item.category}
                    </p>
                    <p className="card__description">{item.description}</p>
                    <p className="card__time">{item.time}</p>
                    <p>
                      <i className="far fa-clock"> </i>
                      {item.timeAgo}
                    </p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Calendar;
