import React, { useState, useEffect } from "react";
import Talk from "../components/Talk";
import { db } from "../services/firebase";

const Talks = () => {
  const [talks, setTalks] = useState([]);

  useEffect(() => {
    db.collection("talks")
      .get()
      .then((querySnapshot) => {
        const loadedTalks = [];
        querySnapshot.forEach((doc) => {
          const currentDoc = doc.data();
          currentDoc.id = doc.id;
          loadedTalks.push(currentDoc);
        });
        setTalks(loadedTalks);
      });
  }, []);

  return (
    <div>
      <section className="talks">
        {talks.map((talk) => {
          return (
            <Talk
              key={talk.id}
              description={talk.description}
              date={talk.date}
              link={talk.calendarLink}
              image={talk.image}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Talks;
