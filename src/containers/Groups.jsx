import React, { useState, useEffect } from "react";
import CategoryGroups from "../components/CategoryGroup";
import StudyGroup from "../components/StudyGroup";

const Groups = () => {
  const [categories, setCategories] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetch("https://coding-latam.firebaseio.com/categories.json").then(
      (response) =>
        response.json().then((responseData) => {
          const loadedCategories = [];
          for (const key in responseData) {
            loadedCategories.push({
              id: key,
              name: responseData[key].name,
            });
          }
          setCategories(loadedCategories);
        })
    );

    fetch("https://coding-latam.firebaseio.com/groups.json").then((response) =>
      response.json().then((responseData) => {
        const loadedGroups = [];
        for (const key in responseData) {
          loadedGroups.push({
            id: key,
            name: responseData[key].name,
            description: responseData[key].description,
            image: responseData[key].image,
          });
        }
        setGroups(loadedGroups);
      })
    );
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
