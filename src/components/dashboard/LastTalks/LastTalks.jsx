import React, { useState, useEffect } from "react";
import LastTalk from "./LastTalk";

const LastTalks = () => {
  const [talks, setTalks] = useState([]);

  useEffect(() => {
    fetch("https://coding-latam.firebaseio.com/talks.json").then((response) =>
      response.json().then((responseData) => {
        const loadedTalks = [];
        for (const key in responseData) {
          loadedTalks.push({
            id: key,
            title: responseData[key].title,
            description: responseData[key].description,
            image: responseData[key].image,
          });
        }
        setTalks(loadedTalks);
      })
    );
  }, []);

  return (
    <div className="last-talks">
      <h2>Últimos videos del canal de youtube:</h2>
      {talks.map((talk) => (
        <LastTalk
          key={talk.id}
          image={talk.image}
          title={talk.title}
          description={talk.description}
        />
      ))}
    </div>
  );
};

export default LastTalks;
