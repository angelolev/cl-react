import React, { useState, useEffect } from "react";
import LastGroup from "./LastGroup";
import { db } from "../../../services/firebase";
const LastGroups = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    db.collection("groups").orderBy("id","desc").limit(3).get().then((querySnapshot) => {
      const lastGroups = [];
      querySnapshot.forEach((doc) => {
        lastGroups.push(doc.data());
      });
      setGroups(lastGroups);
    });

    // fetch("https://coding-latam.firebaseio.com/groups.json").then((response) =>
    //   response.json().then((responseData) => {
    //     const loadedGroups = [];
    //     for (const key in responseData) {
    //       loadedGroups.push({
    //         id: key,
    //         name: responseData[key].name,
    //         description: responseData[key].description,
    //         image: responseData[key].image,
    //       });
    //     }
    //     setGroups(loadedGroups);
    //   })
    // );
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
