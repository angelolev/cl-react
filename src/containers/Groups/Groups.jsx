import React, { useEffect } from "react";
import Category from "../../components/commons/Filters/CategoryFilter";
import StudyGroup from "../../components/commons/StudyGroup/StudyGroup";
import Hero from "../../components/commons/Hero/Hero";
import groupsImage from "./study.png";
import Loader from "../../components/commons/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getGroupsFirebase } from "../../actions/groups";
import { getCategoriesFirebase } from "../../actions/categories";

const Groups = () => {
  const dispatch = useDispatch();
  const groups = useSelector((state) => state.groups);
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getGroupsFirebase());
    dispatch(getCategoriesFirebase());
  }, []);

  return (
    <div className="groups">
      <Hero
        title="Mejora tu aprendizaje con los grupos de estudio"
        image={groupsImage}
      />

      <section className="groups__description">
        {categories?.categories ? null : <Loader />}
        <ul className="groups__tags">
          {categories.categories?.map((category) => {
            return <Category key={category.id} name={category.name} />;
          })}
        </ul>
        <div className="groups__list">
          {groups.groups?.map((group) => {
            return <StudyGroup key={group.id} group={group} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Groups;
