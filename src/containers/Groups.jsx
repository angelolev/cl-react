import React, { useState, useEffect } from "react";
import CategoryGroups from "../components/CategoryGroup";
import StudyGroup from "../components/StudyGroup";
import { db } from "../services/firebase";

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
      <header className="groups-header">
        <div className="groups-header__image">
          <img src="/images/laptop.webp" alt="" />
        </div>
        <div className="groups-header__text">
          <h1>Mejora tu aprendizaje con los grupos de estudio</h1>
        </div>
      </header>
      <section className="groups-description">
        <ul className="groups-tags">
          {categories.map((category) => {
            return <CategoryGroups key={category.id} name={category.name} />;
          })}
        </ul>
        <div className="groups-list">
          {groups.map((group) => {
            return (
              <StudyGroup
                key={group.id}
                name={group.name}
                description={group.description}
                image={group.image}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Groups;
