import React, { useEffect } from "react";
import CategoryFilter from "../../components/commons/Filters/CategoryFilter";
import StudyGroup from "../../components/commons/StudyGroup/StudyGroup";
import Hero from "../../components/commons/Hero/Hero";
import groupsImage from "./study.png";
import Loader from "../../components/commons/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getGroupsFirebase } from "../../services/groups-service";
import { getCategoriesFirebase } from "../../services/categories-service";

const Groups = () => {
  const dispatch = useDispatch();
  const groups = useSelector((state) => state.groups);
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getGroupsFirebase());
    dispatch(getCategoriesFirebase());
  }, []);

  const handleFilter = () => {
    console.log("filtrando");
  };

  return (
    <div className="groups">
      <Hero
        title="Mejora tu aprendizaje con los grupos de estudio"
        image={groupsImage}
      />

      <section className="groups__description">
        {categories?.categoriesList ? null : <Loader />}
        <ul className="groups__tags">
          <CategoryFilter
            categories={categories?.categoriesList}
            handleFilter={handleFilter}
          />
        </ul>
        <div className="groups__list">
          {groups.groupsList?.map((group) => {
            return <StudyGroup key={group.id} group={group} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Groups;
