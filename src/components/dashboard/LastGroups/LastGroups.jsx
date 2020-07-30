import React, { useState, useEffect } from "react";
import LastGroup from "./LastGroup";

const LastGroups = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
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
    <div className="last-groups">
      <h2>Grupos de estudio por iniciar:</h2>
      {groups.map((group) => (
        <LastGroup
          key={group.id}
          image={group.image}
          title={group.title}
          description={group.description}
        />
      ))}
    </div>
  );
};

export default LastGroups;
