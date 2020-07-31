import React, { useState, useEffect } from "react";
import LastTalk from "./LastTalk";
// import { db } from "../../../services/firebase";

const LastTalks = () => {
  const [talks, setTalks] = useState([]);

  useEffect(() => {
    // db.ref("talks").on("value", (snapshot) => {
    //   const lastTalks = [];
    //   snapshot.forEach((snap) => {
    //     lastTalks.push(snap.val());
    //   });
    //   setTalks(lastTalks);
    // });

    fetch("https://coding-latam.firebaseio.com/talks.json").then((response) =>
      response.json().then((responseData) => {
        const loadedTalks = [];
        for (const key in responseData) {
          loadedTalks.push({
            id: key,
            title: responseData[key].title,
            description: responseData[key].description,
            image: responseData[key].image,
            date: responseData[key].date,
            calendarLink: responseData[key].calendarLink,
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
          date={talk.date}
          link={talk.calendarLink}
        />
      ))}
    </div>
  );
};

export default LastTalks;
