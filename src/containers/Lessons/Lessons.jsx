import React, { useEffect, useState } from "react";
import Hero from "../../components/commons/Hero/Hero";
import LessonCard from "../../components/lessons/LessonCard";
import CardSkeleton from "../../components/commons/Skeletons/CardSkeleton";
import CategoryFilter from "../../components/commons/Filters/CategoryFilter";
import heroImage from "../../components/lessons/studygroup.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  getLessonsFirebase,
  getLessonsFiltered,
} from "../../services/lessons-service";
import { useParams } from "react-router";

const Lessons = () => {
  const dispatch = useDispatch();
  const sessions = useSelector((state) => state.lessons);
  const [currentType, setCurrentType] = useState(null);
  const { type } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (type) {
      setCurrentType(type);
      dispatch(getLessonsFiltered(type));
    } else {
      dispatch(getLessonsFirebase());
    }
  }, [type, dispatch]);

  const handleFilter = (type) => {
    dispatch(getLessonsFiltered(type));
  };

  const lessonsCategories = [
    {
      id: 1,
      name: "HTML",
      type: "html",
    },
    {
      id: 2,
      name: "CSS",
      type: "css",
    },
    {
      id: 3,
      name: "Responsive Design",
      type: "responsive-design",
    },
    {
      id: 4,
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
          <CategoryFilter
            categories={lessonsCategories}
            handleFilter={handleFilter}
          />

          <div className="lessons__title">
            <h3>Lista de clases disponibles</h3>
          </div>
          <div className="lessons__description">
            <p>
              Aquí podrás encontrar las sesiones junto con material referente a
              los temas de las clases.
            </p>
          </div>
          {sessions?.lessonsList ? (
            <div className="lessons__list">
              {sessions.lessonsList.map((session) => {
                return (
                  <LessonCard
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
