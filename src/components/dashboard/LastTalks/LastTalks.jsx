import React, { useState, useEffect } from "react";
import LastTalk from "./LastTalk";
import { db } from "../../../services/firebase";

const LastTalks = () => {
  const [talks, setTalks] = useState([]);

  useEffect(() => {
    db.collection("talks")
      .orderBy("id", "asc")
      .limit(2)
      .get()
      .then((querySnapshot) => {
        const lastTalks = [];
        querySnapshot.forEach((doc) => {
          lastTalks.push(doc.data());
        });
        setTalks(lastTalks);
      });
  }, []);

  return (
    <div className="last-talks">
      <h3>Próximas actividades</h3>
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
