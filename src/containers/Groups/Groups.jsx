import React, { useState, useEffect } from "react";
import CategoryGroups from "../../components/commons/CategoryGroup/CategoryGroup";
import StudyGroup from "../../components/commons/StudyGroup/StudyGroup";
import Hero from "../../components/commons/Hero/Hero";
import groupsImage from "./study.png";
import { db } from "../../services/firebase";
import Loader from "../../components/loader/Loader";

const Groups = () => {
  const [categories, setCategories] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    db.collection("categories")
      .get()
      .then((querySnapshot) => {
        const loadedCategories = [];
        querySnapshot.forEach((doc) => {
          const currentDoc = doc.data();
          currentDoc.id = doc.id;
          loadedCategories.push(currentDoc);
        });
        setCategories(loadedCategories);
      });

    db.collection("groups")
      .get()
      .then((querySnapshot) => {
        const loadedGroups = [];
        querySnapshot.forEach((doc) => {
          const currentDoc = doc.data();
          currentDoc.id = doc.id;
          loadedGroups.push(currentDoc);
        });
        setGroups(loadedGroups);
      });
  }, []);

  return (
    <div>
      <Hero
        title="Mejora tu aprendizaje con los grupos de estudio"
        image={groupsImage}
      />

      <section className="groups-description">
        {categories[0] ? null : <Loader />}
        <ul className="groups-tags">
          {categories.map((category) => {
            return <CategoryGroups key={category.id} name={category.name} />;
          })}
        </ul>
        <div className="groups-list">
          {groups.map((group) => {
            return <StudyGroup key={group.id} group={group} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Groups;
