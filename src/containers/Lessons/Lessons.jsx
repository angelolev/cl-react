import React, { useEffect, useState } from "react";
import Hero from "../../components/commons/Hero/Hero";
import Loader from "../../components/commons/Loader/Loader";
import Lesson from "../../components/lessons/Lesson";
import CardSkeleton from "../../components/commons/Skeletons/CardSkeleton";
import Category from "../../components/commons/Filters/CategoryFilter";
import heroImage from "../../components/lessons/studygroup.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  getLessonsFiltered,
  getLessonsFirebase,
  getLessonsCategories,
} from "../../actions/lessons";
import { useParams } from "react-router";

const Lessons = () => {
  const dispatch = useDispatch();
  const sessions = useSelector((state) => state.lessons);
  const [currentType, setCurrentType] = useState(null);
  const { type } = useParams();

  useEffect(() => {
    if (type) {
      setCurrentType(type);
      dispatch(getLessonsFiltered(type));
    } else {
      dispatch(getLessonsFirebase());
      // dispatch(getLessonsCategories());
    }
  }, []);

  // useEffect(() => {
  //   dispatch(getLessonsCategories());
  // }, []);

  const handleFilter = (type) => {
    dispatch(getLessonsFiltered(type));
  };

  const lessonsCategories = [
    {
      name: "HTML",
      type: "html",
    },
    {
      name: "CSS",
      type: "css",
    },
    {
      name: "Responsive Design",
      type: "responsive-design",
    },
    {
      name: "Flexbox",
      type: "flexbox",
    },
  ];

  return (
    <>
      {!currentType ? (
        <Hero title={`Clases Disponibles`} image={heroImage} />
      ) : (
        <Hero title={`Curso de ${type}`} image={heroImage} />
      )}
      <section className="lessons">
        <div className="container">
          <div>
            <ul>
              {lessonsCategories.map((category, index) => {
                return (
                  <li key={index} onClick={() => handleFilter(category.type)}>
                    {category.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="lessons__title">
            <h3>Lista de clases disponibles</h3>
          </div>
          <div className="lessons__description">
            <p>
              Aquí podrás encontrar las sesiones junto con material referente a
              los temas de las clases.
            </p>
          </div>
          {sessions?.lessons ? (
            <div className="lessons__list">
              {sessions.lessons.map((session) => {
                return (
                  <Lesson
                    key={session.id}
                    title={session.title}
                    type={session.type}
                    description={session.description}
                    group={session.group}
                    link={session.link}
                    id={session.id}
                  />
                );
              })}
            </div>
          ) : (
            <CardSkeleton />
          )}
        </div>
      </section>
    </>
  );
};

export default Lessons;
