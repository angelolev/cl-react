import React, { useState } from "react";
import Hero from "../../components/commons/Hero/Hero";
import calendarImage from "./calendar-img.svg";

import moment from "moment";
import "moment/locale/es";
moment.locale("es");

const Calendar = () => {
  function getTime(day) {
    const date = new Date(`March ${day}, 2021 20:00:00 GMT-05:00`);
    // const date = new Date(2020, 8, day, 20, 0, 0);
    return " " + moment(date).fromNow();
  }

  const marzo = [
    {
      day: 1,
      name: "LUN",
    },
    {
      day: 2,
      name: "MAR",
    },
    {
      day: 3,
      name: "MIE",
    },
    {
      day: 4,
      name: "JUE",
    },
    {
      day: 5,
      name: "VIE",
      category: "live",
      description: "Creando una web desde cero con HTML y CSS",
      time: "9:00pm GMT-5 ",
    },
    {
      day: 8,
      name: "LUN",
    },
    {
      day: 9,
      name: "MAR",
    },
    {
      day: 10,
      name: "MIE",
    },
    {
      day: 11,
      name: "JUE",
      category: "read",
      description: "Club de Lectura - Eloquent Javascript",
      time: "10:00pm GMT-5 ",
    },
    {
      day: 12,
      name: "VIE",
      category: "live",
      description: "Creando una web desde cero con HTML y CSS - Parte 2",
      time: "9:15pm GMT-5 ",
    },
    {
      day: 15,
      name: "LUN",
    },
    {
      day: 16,
      name: "MAR",
    },
    {
      day: 17,
      name: "MIE",
    },
    {
      day: 18,
      name: "JUE",
    },
    {
      day: 19,
      name: "VIE",
      category: "live",
      description: "TBD",
      time: "8:00pm GMT-5 ",
    },
    {
      day: 22,
      name: "LUN",
    },
    {
      day: 23,
      name: "MAR",
    },
    {
      day: 24,
      name: "MIE",
    },
    {
      day: 25,
      name: "JUE",
    },
    {
      day: 26,
      name: "VIE",
      category: "live",
      description: "TBD",
      time: "8:00pm GMT-5 ",
    },
    {
      day: 29,
      name: "LUN",
    },
    {
      day: 30,
      name: "MAR",
    },
    {
      day: 31,
      name: "MIE",
    },
  ];

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
    {
      day: 1,
      name: "JUE",
      category: "english",
      description: "Chill and meet",
      time: "9:00pm GMT-5 ",
    },
  ];

  const currentMonth = marzo.map((item) => {
    return {
      ...item,
      timeAgo: getTime(item.day),
    };
  });

  const [calendar, setCalendar] = useState(currentMonth);

  return (
    <div>
      <Hero title="Calendario de actividades del mes" image={calendarImage} />
      <section className="groups-description">
        <div className="calendar">
          <div className="calendar__title">Marzo</div>
          <div className="calendar__header">LUN</div>
          <div className="calendar__header">MAR</div>
          <div className="calendar__header">MIÉ</div>
          <div className="calendar__header">JUE</div>
          <div className="calendar__header">VIE</div>
          {/* <div className="calendar__item vacio"></div> */}
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
